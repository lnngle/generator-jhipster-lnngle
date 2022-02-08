/* eslint-disable consistent-return */
const chalk = require('chalk');
const ClientGenerator = require('generator-jhipster/generators/client');
const prompts = require('./prompts');
const writeFiles = require('./files').writeFiles;

module.exports = class extends ClientGenerator {
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
         * Any method beginning with _ can be reused from the superclass `ClientGenerator`
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
        return {
            askForClient: prompts.askForClient
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
        // The writing phase is being overriden so that we can write our own templates as well.
        return {
            writeAdditionalFile() {
                writeFiles.call(this);
            }
        };
    }

    get postWriting() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._postWriting();
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
