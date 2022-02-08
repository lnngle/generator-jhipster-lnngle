const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('Subgenerator page of lnngle JHipster blueprint', () => {
    describe('Sample test', () => {
        before(async function () {
            this.timeout(20000);
            const result = await helpers
                .create('jhipster:client')
                .inTmpDir(dir => {
                    fse.copySync(path.join(__dirname, '../test/templates/vue-blueprint'), dir);
                })
                .withOptions({
                    fromCli: true,
                    skipInstall: true,
                    blueprint: 'lnngle',
                    skipChecks: true,
                })
                .withGenerators([
                    [
                        require('generator-jhipster/generators/client'), // eslint-disable-line global-require
                        'jhipster:client',
                        require.resolve('generator-jhipster/generators/client'),
                    ],
                    [
                        require('../generators/client'), // eslint-disable-line global-require
                        'jhipster-lnngle:client',
                        path.join(__dirname, '../generators/client/index.js'),
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

            return result
                .create('jhipster:page')
                .withOptions({
                    fromCli: true,
                    skipInstall: true,
                    blueprint: 'lnngle',
                    skipChecks: true,
                })
                .withGenerators([
                    [
                        require('generator-jhipster/generators/page'), // eslint-disable-line global-require
                        'jhipster:page',
                        require.resolve('generator-jhipster/generators/page'),
                    ],
                    [
                        require('../generators/page'), // eslint-disable-line global-require
                        'jhipster-lnngle:page',
                        path.join(__dirname, '../generators/page/index.js'),
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
