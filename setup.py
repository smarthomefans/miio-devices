import os
from setuptools import setup

# Utility function to read the README file.
# Used for the long_description.  It's nice, because now 1) we have a top level
# README file and 2) it's easier to type in the README file than to put a raw
# string in below ...
def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()

setup(
    name = "miio-dev-gen",
    version = "0.0.1",
    author = "SchumyHao",
    author_email = "schumyhaojl@126.com",
    description = ("Generate devices which follow miio protocol"),
    license = "MIT",
    keywords = "miio smarthome xiaomi iobroker homeassistant smarthomefans",
    url = "https://github.com/SchumyHao/miio-devices",
    packages=['miio-dev-gen'],
    data_files=[],
    long_description=read('README'),
    install_requires=[
        'pyyaml',
    ],
)