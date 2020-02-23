import os
import yaml
import json
from string import Template

DATA_ROOT_DIR = 'data'
TYPE_DIR = 'type'
VENDOR_TYPE_DIR = 'vendor_type'
VENDOR_TYPE_VERSION_DIR = 'vendor_type_version'
MACRO_FILE = 'macro.yml'
COMMAND_KEY = 'commands'
PROPERTY_KEY = 'properties'
PARAMETER_KEY = 'parameters'
RESULT_KEY = 'results'

OUTPUT_DIR = 'output'
OUTPUT_NODEJS_DIR = 'nodejs'
OUTPUT_NODEJS_FILE_NAME = 'index.js'

NODEJS_TEMPLATE = Template('\
    var Devices = ${devices};\
    module.exports = Devices;\
')

class Devices(object):
    def __init__(self, root_dir):
        self._root_dir = root_dir
        self._devices = {}
        self._macro = {}

        self.load_macro()
        self.load_type_device()
        self.load_vendor_type_device()
        self.load_vendor_type_version_device()

    def load_macro(self):
        macro_file = os.path.join(self._root_dir, MACRO_FILE)
        self._macro = self.load_yaml(macro_file)

    def load_yaml(self, file: str):
        ret = {}
        if os.path.isfile(file):
            with open(file) as f:
                ret = yaml.load(f, Loader=yaml.FullLoader)
                if COMMAND_KEY in ret:
                    for cmd in ret[COMMAND_KEY]:
                        for i, para in enumerate(ret[COMMAND_KEY][cmd][PARAMETER_KEY]):
                            if type(para) == str and para in self._macro:
                                ret[COMMAND_KEY][cmd][PARAMETER_KEY][i] = self._macro[para]
                if PROPERTY_KEY in ret:
                    for prop in ret[PROPERTY_KEY]:
                        for i, result in enumerate(ret[PROPERTY_KEY][prop][RESULT_KEY]):
                            if type(result) == str and result in self._macro:
                                ret[PROPERTY_KEY][prop][RESULT_KEY][i] = self._macro[result]
        return ret

    def load_type_device(self):
        type_dir = os.path.join(self._root_dir, TYPE_DIR)
        for dirpath, dirname, fnames in os.walk(type_dir):
            for fname in fnames:
                if '.yml' not in fname:
                    continue
                type_raw = self.load_yaml(os.path.join(type_dir, fname))
                type_name = type_raw['type']
                if type_name not in self._devices:
                    self._devices[type_name] = {}
                    self._devices[type_name][COMMAND_KEY] = {}
                    self._devices[type_name][PROPERTY_KEY] = {}

                if COMMAND_KEY in type_raw:
                    self._devices[type_name][COMMAND_KEY] = {
                        **self._devices[type_name][COMMAND_KEY],
                        **type_raw[COMMAND_KEY]
                    }
                if PROPERTY_KEY in type_raw:
                    self._devices[type_name][PROPERTY_KEY] = {
                        **self._devices[type_name][PROPERTY_KEY],
                        **type_raw[PROPERTY_KEY]
                    }

    def load_vendor_type_device(self):
        vendor_type_dir = os.path.join(self._root_dir, VENDOR_TYPE_DIR)
        for dirpath, dirname, fnames in os.walk(vendor_type_dir):
            for fname in fnames:
                if '.yml' not in fname:
                    continue
                vendor_type_raw = self.load_yaml(os.path.join(vendor_type_dir, fname))
                type_name = vendor_type_raw['type']
                vendor_name = vendor_type_raw['vendor']
                if type_name not in self._devices:
                    self._devices[type_name] = {}
                    self._devices[type_name][COMMAND_KEY] = {}
                    self._devices[type_name][PROPERTY_KEY] = {}
                if vendor_name not in self._devices[type_name]:
                    self._devices[type_name][vendor_name] = {}
                    self._devices[type_name][vendor_name][COMMAND_KEY] = {}
                    self._devices[type_name][vendor_name][PROPERTY_KEY] = {}
                # inherit type
                self._devices[type_name][vendor_name][COMMAND_KEY] = {
                    **self._devices[type_name][vendor_name][COMMAND_KEY],
                    **self._devices[type_name][COMMAND_KEY]
                }
                self._devices[type_name][vendor_name][PROPERTY_KEY] = {
                    **self._devices[type_name][vendor_name][PROPERTY_KEY],
                    **self._devices[type_name][PROPERTY_KEY]
                }
                # override use file
                if COMMAND_KEY in vendor_type_raw:
                    self._devices[type_name][vendor_name][COMMAND_KEY] = {
                        **self._devices[type_name][vendor_name][COMMAND_KEY],
                        **vendor_type_raw[COMMAND_KEY]
                    }
                if PROPERTY_KEY in vendor_type_raw:
                    self._devices[type_name][vendor_name][PROPERTY_KEY] = {
                        **self._devices[type_name][vendor_name][PROPERTY_KEY],
                        **vendor_type_raw[PROPERTY_KEY]
                    }

    def load_vendor_type_version_device(self):
        vendor_type_version_dir = os.path.join(self._root_dir, VENDOR_TYPE_VERSION_DIR)
        for dirpath, dirname, fnames in os.walk(vendor_type_version_dir):
            for fname in fnames:
                if '.yml' not in fname:
                    continue
                vendor_type_version_raw = self.load_yaml(os.path.join(vendor_type_version_dir, fname))
                type_name = vendor_type_version_raw['type']
                vendor_name = vendor_type_version_raw['vendor']
                version_name = vendor_type_version_raw['version']
                if type_name not in self._devices:
                    self._devices[type_name] = {}
                    self._devices[type_name][COMMAND_KEY] = {}
                    self._devices[type_name][PROPERTY_KEY] = {}
                if vendor_name not in self._devices[type_name]:
                    self._devices[type_name][vendor_name] = {}
                    self._devices[type_name][vendor_name][COMMAND_KEY] = {}
                    self._devices[type_name][vendor_name][PROPERTY_KEY] = {}
                if version_name not in self._devices[type_name][vendor_name]:
                    self._devices[type_name][vendor_name][version_name] = {}
                    self._devices[type_name][vendor_name][version_name][COMMAND_KEY] = {}
                    self._devices[type_name][vendor_name][version_name][PROPERTY_KEY] = {}
                # inherit type
                self._devices[type_name][vendor_name][version_name][COMMAND_KEY] = {
                    **self._devices[type_name][vendor_name][version_name][COMMAND_KEY],
                    **self._devices[type_name][COMMAND_KEY]
                }
                self._devices[type_name][vendor_name][version_name][PROPERTY_KEY] = {
                    **self._devices[type_name][vendor_name][version_name][PROPERTY_KEY],
                    **self._devices[type_name][PROPERTY_KEY]
                }
                # override use vendor_type
                self._devices[type_name][vendor_name][version_name][COMMAND_KEY] = {
                    **self._devices[type_name][vendor_name][version_name][COMMAND_KEY],
                    **self._devices[type_name][vendor_name][COMMAND_KEY]
                }
                self._devices[type_name][vendor_name][version_name][PROPERTY_KEY] = {
                    **self._devices[type_name][vendor_name][version_name][PROPERTY_KEY],
                    **self._devices[type_name][vendor_name][PROPERTY_KEY]
                }
                # override use file
                if COMMAND_KEY in vendor_type_version_raw:
                    self._devices[type_name][vendor_name][version_name][COMMAND_KEY] = {
                        **self._devices[type_name][vendor_name][version_name][COMMAND_KEY],
                        **vendor_type_version_raw[COMMAND_KEY]
                    }
                if PROPERTY_KEY in vendor_type_version_raw:
                    self._devices[type_name][vendor_name][version_name][PROPERTY_KEY] = {
                        **self._devices[type_name][vendor_name][version_name][PROPERTY_KEY],
                        **vendor_type_version_raw[PROPERTY_KEY]
                    }

    def dump_macro(self):
        print(json.dumps(self._macro, indent=4))

    def dump_devices(self, to_nodejs: bool):
        if to_nodejs:
            nodejs_path = os.path.join(os.path.join(os.getcwd(), OUTPUT_DIR), OUTPUT_NODEJS_DIR)
            nodejs_file = os.path.join(nodejs_path, OUTPUT_NODEJS_FILE_NAME)
            if not os.path.isdir(nodejs_path):
                os.mkdir(nodejs_path);
            if os.path.isfile(nodejs_file):
                os.remove(nodejs_file)
            with open(nodejs_file, 'a') as f:
                f.write(NODEJS_TEMPLATE.substitute(devices=json.dumps(self._devices)))
        else:
            print(json.dumps(self._devices, indent=4))

def main():
    devices = Devices(os.path.join(os.getcwd(), DATA_ROOT_DIR))

    devices.dump_devices(to_nodejs = True)


if __name__ == "__main__":
    # execute only if run as a script
    main()