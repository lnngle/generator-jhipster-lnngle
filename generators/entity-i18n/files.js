const { startCase } = require('lodash');
const utils = require('generator-jhipster/generators/utils');

const entityClientI18nFiles = {
    entityBaseFiles: [
        {
            templates: [
                {
                    sourceFile: context => `i18n/entity_${context.lang}.json.ejs`,
                    destinationFile: context => `${context.clientSrcDir}/assets/i18n/${context.lang}/${context.entityTranslationKey}.json`,
                },
            ],
        },
    ],
};

const enumClientI18nFiles = {
    enumBaseFiles: [
        {
            templates: [
                {
                    sourceFile: 'i18n/enum.json.ejs',
                    destinationFile: context =>
                        `${context.clientSrcDir}/assets/i18n/${context.lang}/${context.clientRootFolder}${context.enumInstance}.json`,
                },
            ],
        },
    ],
};

module.exports = {
    entityClientI18nFiles,
    enumClientI18nFiles,
    writeFiles,
};

function writeFiles() {
    return {
        async writeEnumFiles() {
            if (this.skipClient || !this.enableTranslation) return;
            const { clientSrcDir, packageName, frontendAppName } = this;
            await Promise.all(
                this.fields
                    .map(field => {
                        if (!field.fieldIsEnum) return undefined;
                        // Copy for each
                        const languages = this.languages || this.getAllInstalledLanguages();
                        return languages.map(lang =>
                            this.writeFiles({
                                sections: enumClientI18nFiles,
                                context: {
                                    ...utils.getEnumInfo(field, this.clientRootFolder),
                                    lang,
                                    frontendAppName,
                                    packageName,
                                    clientSrcDir,
                                },
                            })
                        );
                    })
                    .flat()
            );
        },

        async writeClientFiles() {
            if (this.skipClient || !this.enableTranslation) return;

            // Copy each
            const { clientSrcDir, frontendAppName, languages = this.getAllInstalledLanguages() } = this;
            await Promise.all(
                languages.map(async lang => {
                    await this.writeFiles({
                        sections: entityClientI18nFiles,
                        context: { ...this.entity, clientSrcDir, frontendAppName, lang },
                    });
                    this.addEntityTranslationKey(
                        this.entityTranslationKeyMenu,
                        this.entityClassHumanized || startCase(this.entityClass),
                        lang
                    );
                })
            );
        },
    };
}
