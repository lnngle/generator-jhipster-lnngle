const mkdirp = require('mkdirp');
const constants = require('generator-jhipster/generators/generator-constants');

const MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;
const APP_DIR = constants.ANGULAR_DIR;
const ASSETS_DIR = `${MAIN_SRC_DIR}assets/`;
const CLIENT_ALAIN_TEMPLATES_DIR = 'alain';

module.exports = {
    writeFiles,
};

const alainFiles = {
    common: [
        {
            templates: [
                'package.json',
                'angular.json',
                'jest.config.js',
                'ng-alain.json',
                'proxy.conf.js',
                'tsconfig.app.json',
                'tsconfig.json',
                'tsconfig.spec.json',
                'webpack.custom.js',
            ],
        },
    ],
    mock: [
        {
            templates: ['_mock/_account.ts', '_mock/_user.ts', '_mock/index.ts', '_mock/README.md'],
        },
    ],
    vscode: [
        {
            templates: ['.vscode/extensions.json', '.vscode/launch.json', '.vscode/settings.json', '.vscode/tasks.json'],
        },
    ],
    webCommon: [
        {
            path: MAIN_SRC_DIR,
            templates: [
                { file: 'favicon.ico', method: 'copy' },
                'index.html',
                'main.ts',
                'polyfills.ts',
                'setup-jest.ts',
                'style-icons.ts',
                'style-icons-auto.ts',
                'styles.less',
                'typings.d.ts',
                'WEB-INF/web.xml',
                'styles/index.less',
                'styles/theme.less',
                'environments/environment.prod.ts',
                'environments/environment.ts',
            ],
        },
    ],
    webAssets: [
        {
            path: ASSETS_DIR,
            templates: [
                { file: 'logo.svg', method: 'copy' },
                { file: 'logo-color.svg', method: 'copy' },
                { file: 'logo-full.svg', method: 'copy' },
                { file: 'zorro.svg', method: 'copy' },
                '.gitkeep',
                'color.less',
                'style.compact.css',
                'style.dark.css',
                'i18n/en-us/global.json',
                'i18n/en-us/login.json',
                'i18n/en-us/register.json',
                'i18n/en-us/user.json',
                'i18n/zh-cn/global.json',
                'i18n/zh-cn/login.json',
                'i18n/zh-cn/register.json',
                'i18n/zh-cn/user.json',
            ],
        },
    ],
    webApp: [
        {
            path: APP_DIR,
            templates: [
                'app.component.ts',
                'app.module.ts',
                'global-config.module.ts',
                'core/core.module.ts',
                'core/index.ts',
                'core/module-import-guard.ts',
                'core/README.md',
                'core/i18n/i18n.service.spec.ts',
                'core/i18n/i18n.service.ts',
                'core/menu/menu-data.service.ts',
                'core/net/default.interceptor.ts',
                'core/startup/startup.service.ts',
                'layout/layout.module.ts',
                'layout/basic/README.md',
                'layout/basic/basic.component.ts',
                'layout/basic/widgets/clear-storage.component.spec.ts',
                'layout/basic/widgets/clear-storage.component.ts',
                'layout/basic/widgets/fullscreen.component.spec.ts',
                'layout/basic/widgets/fullscreen.component.ts',
                'layout/basic/widgets/i18n.component.spec.ts',
                'layout/basic/widgets/i18n.component.ts',
                'layout/basic/widgets/search.component.spec.ts',
                'layout/basic/widgets/search.component.ts',
                'layout/basic/widgets/user.component.spec.ts',
                'layout/basic/widgets/user.component.ts',
                'layout/blank/blank.component.spec.ts',
                'layout/blank/blank.component.ts',
                'layout/blank/README.md',
                'layout/passport/passport.component.html',
                'layout/passport/passport.component.less',
                'layout/passport/passport.component.spec.ts',
                'layout/passport/passport.component.ts',
                'routes/routes.module.ts',
                'routes/routes-routing.module.ts',
                'routes/dashboard/dashboard.component.html',
                'routes/dashboard/dashboard.component.spec.ts',
                'routes/dashboard/dashboard.component.ts',
                'routes/exception/exception.component.spec.ts',
                'routes/exception/exception.component.ts',
                'routes/exception/exception.module.ts',
                'routes/exception/exception-routing.module.ts',
                'routes/passport/login/login.component.html',
                'routes/passport/login/login.component.less',
                'routes/passport/login/login.component.spec.ts',
                'routes/passport/login/login.component.ts',
                'routes/passport/register/register.component.html',
                'routes/passport/register/register.component.less',
                'routes/passport/register/register.component.spec.ts',
                'routes/passport/register/register.component.ts',
                'routes/passport/register-result/register-result.component.html',
                'routes/passport/register-result/register-result.component.spec.ts',
                'routes/passport/register-result/register-result.component.ts',
                'routes/settings/settings.component.html',
                'routes/settings/settings.component.less',
                'routes/settings/settings.component.spec.ts',
                'routes/settings/settings.component.ts',
                'routes/settings/account/account.component.html',
                'routes/settings/account/account.component.less',
                'routes/settings/account/account.component.spec.ts',
                'routes/settings/account/account.component.ts',
                'routes/settings/password/password.component.html',
                'routes/settings/password/password.component.less',
                'routes/settings/password/password.component.spec.ts',
                'routes/settings/password/password.component.ts',
                'shared/index.ts',
                'shared/shared.module.ts',
                'shared/shared-delon.module.ts',
                'shared/shared-zorro.module.ts',
                'shared/constants/global-constant.ts',
                'shared/json-schema/README.md',
                'shared/json-schema/json-schema.module.ts',
                'shared/json-schema/test/test.widget.ts',
                'shared/st-widget/st-widget.module.ts',
                'shared/utils/yuan.ts',
                'shared/validator/equar-validator.directive.ts',
            ],
        },
    ],
    webAppSystem: [
        {
            path: APP_DIR,
            templates: [
                'routes/system/system.module.ts',
                'routes/system/system-routing.module.ts',
                'routes/system/user/user.component.html',
                'routes/system/user/user.component.spec.ts',
                'routes/system/user/user.component.ts',
                'routes/system/user/edit/edit.component.html',
                'routes/system/user/edit/edit.component.spec.ts',
                'routes/system/user/edit/edit.component.ts',
                'routes/system/user/view/view.component.html',
                'routes/system/user/view/view.component.spec.ts',
                'routes/system/user/view/view.component.ts',
            ],
        },
    ],
};

function writeFiles() {
    mkdirp(MAIN_SRC_DIR);
    // write ng-alain files
    this.writeFilesToDisk(alainFiles, this, false, `${CLIENT_ALAIN_TEMPLATES_DIR}`);
}
