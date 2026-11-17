/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly RAWG_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
