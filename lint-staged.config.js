module.exports = {
    '*.js': [
        'npm run lint:js -- --fix',
        'git add',
    ],
    '*.scss': [
        'npm run lint:scss -- --fix',
        'git add',
    ],
};
