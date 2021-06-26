"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClienConnection = exports.createPoolConnection = void 0;
const pg_1 = require("pg");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const connectionSettings = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: Number(process.env.CLOUD_PORT),
    host: process.env.CLOUD_HOST,
    database: process.env.DATABASE,
};
function createPoolConnection() {
    const pool = new pg_1.Pool(connectionSettings);
    return pool;
}
exports.createPoolConnection = createPoolConnection;
function createClienConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client(connectionSettings);
        yield client.connect();
        return client;
    });
}
exports.createClienConnection = createClienConnection;
//# sourceMappingURL=databaseConnection.js.map