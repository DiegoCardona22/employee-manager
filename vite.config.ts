/// <reference types="vitest" />
/// <reference types="vite/client" />

// @packages
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    mode,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@core': path.resolve(__dirname, 'src/core'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@lang': path.resolve(__dirname, 'src/lang'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@redux': path.resolve(__dirname, 'src/redux'),
        '@routes': path.resolve(__dirname, 'src/routes'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@stories': path.resolve(__dirname, 'src/stories'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [react()],
    define: {
      'process.env': JSON.stringify({
        ...process.env,
        ...loadEnv(mode, process.cwd()),
      }),
      APP_NAME: JSON.stringify(process.env.npm_package_name),
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "./src/styles/colors.scss";
          @import "./src/styles/variables.scss";
        `,
        },
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/setupTests.ts'],
      css: true,
      watch: false,
      allowOnly: true,
      coverage: {
        provider: 'istanbul',
        all: true,
        include: ['src/**/*.ts, src/**/*.tsx'],
        reportsDirectory: 'out/coverage',
        exclude: [
          'src/routes/**',
          'src/types/**',
          'src/App.tsx',
          'src/main.tsx',
          'src/core',
          'src/redux',
        ],
      },
    },
    build: {
      minify: false,
      outDir: `out/build/${mode}`,
    },
    server: {
      port: 3000,
    },
  });
};
