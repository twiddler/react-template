// TypeScript does not know what the type of process.env.[yourcustomenvironmentvariable] is. Since we validate our environment variables with Joi in our webpack configuration, we can TypeScript that the following types are correct:

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string
            API_BASE_URL: string
            PUBLIC_PATH: string
        }
    }
}

// If this file has no import/export statements (i.e. is a script) convert it into a module by adding an empty export statement. This is needed for TypeScript to recognize the types.
export {}
