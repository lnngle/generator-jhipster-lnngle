const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('Subgenerator entity-client of lnngle JHipster blueprint', () => {
    describe('Sample test', () => {
        before(async function () {
            this.timeout(20000);
            return helpers
                .create('jhipster:entity')
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
                        require('generator-jhipster/generators/entity'), // eslint-disable-line global-require
                        'jhipster:entity',
                        require.resolve('generator-jhipster/generators/entity'),
                    ],
                    [
                        require('generator-jhipster/generators/entity-client'), // eslint-disable-line global-require
                        'jhipster:entity-client',
                        require.resolve('generator-jhipster/generators/entity-client'),
                    ],
                    [
                        require('../generators/entity-client'), // eslint-disable-line global-require
                        'jhipster-lnngle:entity-client',
                        path.join(__dirname, '../generators/entity-client/index.js'),
                    ],
                ])
                .withArguments(['foo'])
                .withPrompts({
                    fieldAdd: false,
                    relationshipAdd: false,
                    dto: 'no',
                    service: 'no',
                    pagination: 'infinite-scroll',
                })
                .run();
        });

        it('it works', () => {
            // Adds your tests here
            assert.textEqual('Write your own tests!', 'Write your own tests!');
        });
    });
});
