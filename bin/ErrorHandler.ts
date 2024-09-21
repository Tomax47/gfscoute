import captureStackTrace from "capture-stack-trace";

export class ErrorHandler extends Error {
    public readonly name: string;
    public readonly statusCode: string;
    public readonly isOperational: boolean;

    constructor(name: string, statusCode: string, description: string, isOperational: boolean) {
        super(description);

        Object.setPrototypeOf(this, new.target.prototype);

        this.name= name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        captureStackTrace(this);
    }
}
