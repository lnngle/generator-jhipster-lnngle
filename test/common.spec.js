const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('Subgenerator common of lnngle JHipster blueprint', () => {
    describe('Sample test', () => {
        before(async function () {
            this.timeout(20000);
            return helpers
                .create('jhipster:common')
                .withOptions({
                    fromCli: true,
                    skipInstall: true,
                    blueprint: 'lnngle',
                    skipChecks: true,
                })
                .withGenerators([
                    [
                        require('generator-jhipster/generators/common'), // eslint-disable-line global-require
                        'jhipster:common',
                        require.resolve('generator-jhipster/generators/common'),
                    ],
                    [
                        require('../generators/common'), // eslint-disable-line global-require
                        'jhipster-lnngle:common',
                        path.join(__dirname, '../generators/common/index.js'),
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
