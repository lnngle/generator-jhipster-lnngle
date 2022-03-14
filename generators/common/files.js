const prettierConfigFiles = {
    global: [
        {
            templates: ['.prettierrc.js', '.prettierignore'],
        },
    ],
};

const commonFiles = {
    global: [
        {
            templates: [
                'README.md',
                '.browserslistrc',
                '.editorconfig',
                '.eslintignore',
                '.eslintrc.js',
                '.stylelintrc',
                'sonar-project.properties',
                {
                    file: 'gitignore',
                    renameTo: () => '.gitignore',
                },
            ],
        },
    ],
    commitHooks: [
        {
            condition: generator => !generator.skipCommitHook,
            templates: [
                {
                    file: '.husky/pre-commit',
                    method: 'copy',
                    noEjs: true,
                },
            ],
        },
    ],
};

function writeFiles() {
    return {
        writeFiles() {
            return this.writeFilesToDisk(commonFiles);
        },
    };
}

module.exports = {
    writeFiles,
    prettierConfigFiles,
    commonFiles,
};
