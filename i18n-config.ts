export const i18n = {
  locales: ["de", "en", "it", "nl", "hu", "es", "ua", "po", "fr"],
  defaultLocale: "en",
};

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];
