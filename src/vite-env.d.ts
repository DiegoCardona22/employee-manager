/// <reference types="vite/client" />
declare const APP_VERSION: string;
declare const APP_NAME: string;
declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};
