const utils = require('../utils');

const ALAIN_DIR = 'src/main/webapp/app/routes/';
const ALAIN_EDIT_DIR = 'edit/';
const ALAIN_VIEW_DIR = 'view/';
const CLIENT_ALAIN_TEMPLATES_DIR = 'alain';

const alainFiles = {
    client: [
        {
            condition: generator => !generator.embedded,
            path: ALAIN_DIR,
            templates: [
                {
                    file: 'entities/entity.component.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.component.ts`,
                },
                {
                    file: 'entities/entity.component.html',
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.component.html`,
                },
                {
                    file: 'entities/entity.component.spec.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.component.spec.ts`,
                },
            ],
        },
        {
            condition: generator => !generator.embedded,
            path: ALAIN_DIR,
            templates: [
                {
                    file: `entities/${ALAIN_EDIT_DIR}edit.component.ts`,
                    renameTo: generator => `entities/${generator.entityFolderName}/${ALAIN_EDIT_DIR}edit.component.ts`,
                },
                {
                    file: `entities/${ALAIN_EDIT_DIR}edit.component.html`,
                    renameTo: generator => `entities/${generator.entityFolderName}/${ALAIN_EDIT_DIR}edit.component.html`,
                },
                {
                    file: `entities/${ALAIN_EDIT_DIR}edit.component.spec.ts`,
                    renameTo: generator => `entities/${generator.entityFolderName}/${ALAIN_EDIT_DIR}edit.component.spec.ts`,
                },
            ],
        },
        {
            condition: generator => !generator.readOnly && !generator.embedded,
            path: ALAIN_DIR,
            templates: [
                {
                    file: `entities/${ALAIN_VIEW_DIR}view.component.ts`,
                    renameTo: generator => `entities/${generator.entityFolderName}/${ALAIN_VIEW_DIR}view.component.ts`,
                },
                {
                    file: `entities/${ALAIN_VIEW_DIR}view.component.html`,
                    renameTo: generator => `entities/${generator.entityFolderName}/${ALAIN_VIEW_DIR}view.component.html`,
                },
                {
                    file: `entities/${ALAIN_VIEW_DIR}view.component.spec.ts`,
                    renameTo: generator => `entities/${generator.entityFolderName}/${ALAIN_VIEW_DIR}view.component.spec.ts`,
                },
            ],
        },
    ],
    mock: [
        {
            templates: [
                {
                    file: '_mock/entity-mock.ts',
                    renameTo: generator => `_mock/_${generator.entityInstance}.ts`,
                },
            ],
        },
    ],
};

function writeFiles() {
    if (this.skipClient) return;

    // write client side files for Vue.js
    this.writeFilesToDisk(alainFiles, this, false, `${CLIENT_ALAIN_TEMPLATES_DIR}`);
    utils.addApiToGlobalConstants(this, this.entityInstance, this.entityApiUrl);
    utils.addComponentToModule(this, this.entityAngularName);
    utils.addComponentToModuleImport(this, this.entityAngularName, this.entityFolderName, this.entityFileName);
    utils.addComponentToRouting(this, this.entityAngularName, this.entityFileName);
    utils.addComponentToRoutingImport(this, this.entityAngularName, this.entityFolderName, this.entityFileName);
    utils.addComponentToMenu(this, this.entityFileName, this.entityTranslationKey);
    utils.addEntityMockData(this, this.entityInstance, this.skipServer);
}

module.exports = {
    writeFiles,
};
