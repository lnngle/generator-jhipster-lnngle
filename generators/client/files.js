const mkdirp = require('mkdirp');
const constants = require('generator-jhipster/generators/generator-constants');
const utils = require('../utils');

const MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;
const TEST_SRC_DIR = constants.CLIENT_TEST_SRC_DIR;
const ALAIN_DIR = constants.ANGULAR_DIR;
const CLIENT_ALAIN_TEMPLATES_DIR = 'alain';

module.exports = {
    writeFiles,
};

const alainFiles = {
    common: [
        {
            templates: [
                'package.json'
            ]
        }
    ]
}

function writeFiles() {
    mkdirp(MAIN_SRC_DIR);
    // write ng-alain files
    this.writeFilesToDisk(alainFiles, this, false, `${CLIENT_ALAIN_TEMPLATES_DIR}`);
}
