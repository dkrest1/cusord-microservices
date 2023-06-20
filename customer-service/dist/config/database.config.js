"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('database', () => ({
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'your_username',
    password: process.env.DB_PASSWORD || 'your_password',
    db: process.env.DB_DATABASE || 'your_database',
}));
//# sourceMappingURL=database.config.js.map