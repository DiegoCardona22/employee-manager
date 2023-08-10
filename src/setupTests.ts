// @packages
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// @scripts
import initI18n from './lang';

global.ResizeObserver = require('resize-observer-polyfill');

initI18n();
expect.extend(matchers);
