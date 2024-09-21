"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const capture_stack_trace_1 = __importDefault(require("capture-stack-trace"));
class ErrorHandler extends Error {
    constructor(name, statusCode, description, isOperational) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        (0, capture_stack_trace_1.default)(this);
    }
}
exports.ErrorHandler = ErrorHandler;
