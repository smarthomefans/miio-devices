import os
import yaml
import json

DATA_ROOT_DIR = 'data'
VENDOR_TYPE_VERSION_DEVICE_DIR = 'vendor_type_version'
TYPE_DEVICE_DIR = 'type'
MACRO_FILE = 'macro.yml'

class Devices(object):
    def __init__(self, root_dir):
        self._root_dir = root_dir
        self._devices = {}
        self._macro = {}

        self.load_macro()

    def load_macro(self):
        macro_file = os.path.join(self._root_dir, MACRO_FILE)

        if os.path.isfile(macro_file):
            with open(macro_file) as file:
                self._macro = yaml.load(file, Loader=yaml.FullLoader)

    def dump_macro(self):
        print(json.dumps(self._macro, indent=4))

def main():
    devices = Devices(os.path.join(os.getcwd(), DATA_ROOT_DIR))

    devices.dump_macro()


if __name__ == "__main__":
    # execute only if run as a script
    main()