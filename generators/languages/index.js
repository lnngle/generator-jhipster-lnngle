/* eslint-disable consistent-return */
const chalk = require('chalk');
const LanguagesGenerator = require('generator-jhipster/generators/languages');
const constants = require('generator-jhipster/generators/generator-constants');
const { clientI18nFiles } = require('./files');

module.exports = class extends LanguagesGenerator {
    constructor(args, opts) {
        super(args, { fromBlueprint: true, ...opts }); // fromBlueprint variable is important

        const jhContext = (this.jhipsterContext = this.options.jhipsterContext);

        if (!jhContext) {
            this.error(`This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprints lnngle')}`);
        }

        this.configOptions = jhContext.configOptions || {};
    }

    get initializing() {
        /**
         * Any method beginning with _ can be reused from the superclass `LanguagesGenerator`
         *
         * There are multiple ways to customize a phase from JHipster.
         *
         * 1. Let JHipster handle a phase, blueprint doesnt override anything.
         * ```
         *      return super._initializing();
         * ```
         *
         * 2. Override the entire phase, this is when the blueprint takes control of a phase
         * ```
         *      return {
         *          myCustomInitPhaseStep() {
         *              // Do all your stuff here
         *          },
         *          myAnotherCustomInitPhaseStep(){
         *              // Do all your stuff here
         *          }
         *      };
         * ```
         *
         * 3. Partially override a phase, this is when the blueprint gets the phase from JHipster and customizes it.
         * ```
         *      const phaseFromJHipster = super._initializing();
         *      const myCustomPhaseSteps = {
         *          displayLogo() {
         *              // override the displayLogo method from the _initializing phase of JHipster
         *          },
         *          myCustomInitPhaseStep() {
         *              // Do all your stuff here
         *          },
         *      }
         *      return { ...phaseFromJHipster, ...myCustomPhaseSteps };
         * ```
         */
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._initializing();
    }

    get prompting() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        const defaultPhaseFromJHipster = super._prompting();
        return {
            ...defaultPhaseFromJHipster,
            askI18n: undefined,
            askForLanguages: undefined,
            overrideConfigOptions() {
                this.enableTranslation = this.jhipsterConfig.enableTranslation = true;
                this.languages = this.jhipsterConfig.languages = ['zh-cn'];
            },
        };
    }

    get configuring() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._configuring();
    }

    get composing() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._composing();
    }

    get loading() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._loading();
    }

    get preparing() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._preparing();
    }

    get default() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._default();
    }

    get writing() {
        return {
            async writeClientTranslations() {
                if (!super.skipClient) {
                    // eslint-disable-next-line no-restricted-syntax
                    for (const lang of super.languagesToApply) {
                        super.lang = lang;
                        // eslint-disable-next-line no-await-in-loop
                        await super.writeFiles({ sections: clientI18nFiles });
                    }
                }
            },
            translateFile() {
                this.languagesToApply.forEach(language => {
                    if (!this.skipServer) {
                        this.installI18nServerFilesByLanguage(this, constants.SERVER_MAIN_RES_DIR, language, constants.SERVER_TEST_RES_DIR);
                    }
                    super.statistics.sendSubGenEvent('languages/language', language);
                });
            },
        };
    }

    get postWriting() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return {};
    }

    get install() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._install();
    }

    get end() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._end();
    }
};
