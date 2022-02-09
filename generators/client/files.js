const mkdirp = require('mkdirp');
const constants = require('generator-jhipster/generators/generator-constants');

const MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;
const CLIENT_ALAIN_TEMPLATES_DIR = 'alain';

module.exports = {
    writeFiles,
};

const alainFiles = {
    common: [
        {
            templates: [
                'package.json',
                'angular.json',
                'jest.config.js',
                'ng-alain.json',
                'proxy.conf.js',
                'tsconfig.app.json',
                'tsconfig.json',
                'tsconfig.spec.json',
                'webpack.custom.js',
            ],
        },
    ],
};

function writeFiles() {
    mkdirp(MAIN_SRC_DIR);
    // write ng-alain files
    this.writeFilesToDisk(alainFiles, this, false, `${CLIENT_ALAIN_TEMPLATES_DIR}`);
}
