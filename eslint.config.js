import globals from 'globals'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import ts from 'typescript-eslint'

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    }
  },
  {
    ignores: ['build/', '.svelte-kit/', 'dist/'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'none',
      allowImportingTsExtensions: true,
      moduleResolution: 'nodenext'
    }
  }
)