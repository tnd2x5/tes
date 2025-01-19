export const APP_CONFIG = {
    CHAT_ID: '1819276982',

    TOKEN: '7896416026:AAHJCytsk15GUaBxJi6_JA6B4Te4asALyUU',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 5
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
