const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('Subgenerator app of lnngle JHipster blueprint', () => {
    describe('Sample test', () => {
        before(async function () {
            this.timeout(20000);
            return helpers
                .create('jhipster:app')
                .inTmpDir(dir => {
                    fse.copySync(path.join(__dirname, '../test/templates/ngx-blueprint'), dir);
                })
                .withOptions({
                    fromCli: true,
                    skipInstall: true,
                    blueprint: 'lnngle',
                    skipChecks: true,
                })
                .withGenerators([
                    [
                        require('generator-jhipster/generators/app'), // eslint-disable-line global-require
                        'jhipster:app',
                        require.resolve('generator-jhipster/generators/app'),
                    ],
                    [
                        require('../generators/app'), // eslint-disable-line global-require
                        'jhipster-lnngle:app',
                        path.join(__dirname, '../generators/app/index.js'),
                    ],
                ])
                .withPrompts({
                    baseName: 'sampleMysql',
                    packageName: 'com.mycompany.myapp',
                    applicationType: 'monolith',
                    databaseType: 'sql',
                    devDatabaseType: 'h2Disk',
                    prodDatabaseType: 'mysql',
                    cacheProvider: 'ehcache',
                    authenticationType: 'session',
                    enableTranslation: true,
                    nativeLanguage: 'en',
                    languages: ['fr', 'de'],
                    buildTool: 'maven',
                    rememberMeKey: '2bb60a80889aa6e6767e9ccd8714982681152aa5',
                })
                .run();
        });

        it('it works', () => {
            // Adds your tests here
            assert.textEqual('Write your own tests!', 'Write your own tests!');
        });
    });
});
