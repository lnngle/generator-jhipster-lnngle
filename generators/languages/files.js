const constants = require('generator-jhipster/generators/generator-constants');

const CLIENT_MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;

module.exports.clientI18nFiles = {
    clientI18nFiles: [
        {
            from: context => `${CLIENT_MAIN_SRC_DIR}/assets/i18n/${context.lang}/`,
            to: context => `${CLIENT_MAIN_SRC_DIR}/assets/i18n/${context.lang}/`,
            transform: false,
            templates: ['login.json', 'register.json', 'user.json'],
        },
        {
            from: context => `${CLIENT_MAIN_SRC_DIR}/assets/i18n/${context.lang}/`,
            to: context => `${CLIENT_MAIN_SRC_DIR}/assets/i18n/${context.lang}/`,
            templates: ['global.json'],
        },
    ],
};
