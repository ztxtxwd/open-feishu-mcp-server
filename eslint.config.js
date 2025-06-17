import js from '@eslint/js'
import tseslintPlugin from '@typescript-eslint/eslint-plugin'
import tseslintParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'

export default [
  // 忽略特定文件
  {
    ignores: [
      'node_modules/**',
      '.wrangler/**',
      'worker-configuration.d.ts',
      '*.js',
      '*.d.ts',
      'jest.config.js',
      '.git/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'docs/**',
      'lark-openapi-mcp/**',
      'package-lock.json',
      'pnpm-lock.yaml',
    ],
  },
  // JavaScript 基础配置
  js.configs.recommended,
  // TypeScript 文件配置
  {
    files: ['src/**/*.{ts,tsx}'],
          languageOptions: {
        parser: tseslintParser,
        parserOptions: {
          project: './tsconfig.json',
          ecmaVersion: 2021,
          sourceType: 'module',
        },
        globals: {
          // Node.js globals
          console: 'readonly',
          process: 'readonly',
          Buffer: 'readonly',
          __dirname: 'readonly',
          __filename: 'readonly',
          global: 'readonly',
          module: 'readonly',
          require: 'readonly',
          exports: 'readonly',
          // Web APIs (for Cloudflare Workers)
          fetch: 'readonly',
          Response: 'readonly',
          Request: 'readonly',
          URL: 'readonly',
          URLSearchParams: 'readonly',
          FormData: 'readonly',
          File: 'readonly',
          btoa: 'readonly',
          atob: 'readonly',
          crypto: 'readonly',
          CryptoKey: 'readonly',
          TextEncoder: 'readonly',
          TextDecoder: 'readonly',
          setTimeout: 'readonly',
          clearTimeout: 'readonly',
          setInterval: 'readonly',
          clearInterval: 'readonly',
          // Cloudflare Workers types
          Env: 'readonly',
        },
      },
    plugins: {
      '@typescript-eslint': tseslintPlugin,
      import: importPlugin,
    },
    rules: {
      // TypeScript 规则
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'semi': ['error', 'always'],
      
      // Import 规则
      'import/prefer-default-export': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      
      // 基础规则
      'no-console': 'off',
      'no-debugger': 'error',
      'no-unused-vars': 'off', // 使用 TypeScript 版本
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': 'error',
      'curly': 'error',
      'no-case-declarations': 'off',
    },
  },
  // Jest 测试文件配置
  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/__tests__/**/*.ts', '**/__tests__/**/*.tsx'],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: {
        // Jest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
        // Node.js globals
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslintPlugin,
      import: importPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'off',
      'semi': ['error', 'always'],
    },
  },
] 