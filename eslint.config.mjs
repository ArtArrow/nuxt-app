// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
    rules: {
        'no-console': 'off',
        'unused-imports/no-unused-imports': 'error',
        'style/indent': ['error', 4],
    },
})
