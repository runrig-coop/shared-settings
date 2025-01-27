import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
// import importPlugin from 'eslint-plugin-import';
import runrigBase from './base.js';

/**
 * Mimic ESLintRC-style extends for AirBNB based on eslint@^8.0.0.
 * @see https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
 */
const compat = new FlatCompat({
  //  Mimic CommonJS variables for FlatCompat.
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});
const airbnbBase = compat.extends('eslint-config-airbnb-base');

export default [
  // importPlugin.flatConfigs.recommended,
  ...airbnbBase,
  runrigBase,

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {},
  },

];
