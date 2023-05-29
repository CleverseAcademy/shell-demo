"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const foo_1 = __importDefault(require("./foo"));
const bar_1 = __importDefault(require("./bar"));
const dotenv_1 = __importDefault(require("dotenv"));
(0, foo_1.default)();
(0, bar_1.default)();
dotenv_1.default.config();
console.log(`MYENV is ${process.env.MYENV}`);
//# sourceMappingURL=index.js.map