import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginReact from 'eslint-plugin-react'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021, // hoặc 'latest'
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
      react: eslintPluginReact
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'avoid',
          semi: false,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 80,
          jsxSingleQuote: false
        }
      ],
      // JavaScript rules
      'prefer-const': 'warn',
      'no-var': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'object-shorthand': 'warn',
      'quote-props': ['warn', 'as-needed'],
      '@typescript-eslint/no-explicit-any': 'warn',
      // TypeScript rules
      '@typescript-eslint/array-type': [
        'warn',
        {
          default: 'array'
        }
      ],
      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never'
        }
      ],
      // React rules
      'react/jsx-fragments': ['warn', 'syntax'], // Shorthand syntax for React fragments
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['ts', 'tsx']
        }
      ],
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    }
  }
)
