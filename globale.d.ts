declare global {
    interface ErrorConstructor {
        captureStackTrace(targetObject: Object, constructorOpt?: Function): void;
    }
}
export {};
