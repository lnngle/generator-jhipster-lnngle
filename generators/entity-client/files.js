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
};

function writeFiles() {
    if (this.skipClient) return;

    // write client side files for Vue.js
    this.writeFilesToDisk(alainFiles, this, false, `${CLIENT_ALAIN_TEMPLATES_DIR}`);
}

module.exports = {
    writeFiles,
};
