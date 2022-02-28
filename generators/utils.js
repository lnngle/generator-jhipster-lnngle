const jhipsterUtils = require('generator-jhipster/generators/utils');
const constants = require('generator-jhipster/generators/generator-constants');

const CLIENT_MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;

module.exports = {
    addApiToGlobalConstants,
    addComponentToModule,
    addComponentToModuleImport,
    addComponentToRouting,
    addComponentToRoutingImport,
    addComponentToMenu,
    addEntityMockData,
};

function addApiToGlobalConstants(generator, entityInstance, entityApiUrl) {
    jhipsterUtils.rewriteFile(
        {
            file: `${CLIENT_MAIN_SRC_DIR}/app/shared/constants/global-constant.ts`,
            needle: '// jhipster-needle-add-api-to-constants',
            splicable: [`static readonly ${entityInstance} = \`\${RoutesApi.api_prefix}/${entityApiUrl}/\`;`],
        },
        generator
    );
}

function addComponentToModule(generator, entityAngularName) {
    jhipsterUtils.rewriteFile(
        {
            file: `${CLIENT_MAIN_SRC_DIR}/app/routes/entities/entities.module.ts`,
            needle: '// jhipster-needle-add-component-to-module',
            prettierAware: true,
            splicable: [
                `Entities${entityAngularName}Component,`,
                `Entities${entityAngularName}EditComponent,`,
                `Entities${entityAngularName}ViewComponent,`,
            ],
        },
        generator
    );
}

function addComponentToModuleImport(generator, entityAngularName, entityFolderName, entityFileName) {
    jhipsterUtils.rewriteFile(
        {
            file: `${CLIENT_MAIN_SRC_DIR}/app/routes/entities/entities.module.ts`,
            needle: '// jhipster-needle-add-component-to-module-import',
            splicable: [
                `import { Entities${entityAngularName}Component } from './${entityFolderName}/${entityFileName}.component';`,
                `import { Entities${entityAngularName}EditComponent } from './${entityFolderName}/edit/edit.component';`,
                `import { Entities${entityAngularName}ViewComponent } from './${entityFolderName}/view/view.component';`,
            ],
        },
        generator
    );
}

function addComponentToRouting(generator, entityAngularName, entityFileName) {
    jhipsterUtils.rewriteFile(
        {
            file: `${CLIENT_MAIN_SRC_DIR}/app/routes/entities/entities-routing.module.ts`,
            needle: '// jhipster-needle-add-component-to-routing',
            prettierAware: true,
            splicable: [`{ path: '${entityFileName}', component: Entities${entityAngularName}Component },`],
        },
        generator
    );
}

function addComponentToRoutingImport(generator, entityAngularName, entityFolderName, entityFileName) {
    jhipsterUtils.rewriteFile(
        {
            file: `${CLIENT_MAIN_SRC_DIR}/app/routes/entities/entities-routing.module.ts`,
            needle: '// jhipster-needle-add-component-to-routing-import',
            prettierAware: true,
            splicable: [`import { Entities${entityAngularName}Component } from './${entityFolderName}/${entityFileName}.component';`],
        },
        generator
    );
}

function addComponentToMenu(generator, entityFileName, entityTranslationKey) {
    jhipsterUtils.rewriteFile(
        {
            file: `${CLIENT_MAIN_SRC_DIR}/app/core/menu/menu-data.service.ts`,
            needle: '// jhipster-needle-add-component-to-menu',
            prettierAware: true,
            splicable: [
                generator.stripMargin(
                    `| {
                    |   text: '${entityTranslationKey}',
                    |   i18n: '${entityTranslationKey}.title',
                    |   icon: { type: 'icon', value: 'menu' },
                    |   link: '/entities/${entityFileName}'
                    | },`
                ),
            ],
        },
        generator
    );
}

function addEntityMockData(generator, entityInstance) {
    jhipsterUtils.rewriteFile(
        {
            file: '_mock/index.ts',
            needle: '// jhipster-needle-add-entity-mock-data',
            prettierAware: true,
            splicable: [`export * from './_${entityInstance}';`],
        },
        generator
    );
}
