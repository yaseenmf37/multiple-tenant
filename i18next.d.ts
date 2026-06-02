import "i18next";

import common from "./locales/en/common.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      common: typeof common;
    };
    returnNull: false;
    returnEmptyString: false;
  }
}
