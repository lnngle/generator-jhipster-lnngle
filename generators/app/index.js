/* eslint-disable consistent-return */
const AppGenerator = require('generator-jhipster/generators/app');

module.exports = class extends AppGenerator {
    constructor(args, opts) {
        super(args, { fromBlueprint: true, ...opts }); // fromBlueprint variable is important
    }

    get initializing() {
        /**
         * Any method beginning with _ can be reused from the superclass `AppGenerator`
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
            askForApplicationType: this.jhipsterConfig.skipServer ? undefined : super._prompting().askForApplicationType,
        };
    }

    get configuring() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._configuring();
    }

    get composing() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        const defaultPhaseFromJHipster = super._composing();
        return {
            ...defaultPhaseFromJHipster,
            askForTestOpts: this.jhipsterConfig.skipServer ? undefined : super._prompting().askForTestOpts,
            askForMoreModules: this.jhipsterConfig.skipServer ? undefined : super._prompting().askForMoreModules,
        };
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
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._writing();
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
