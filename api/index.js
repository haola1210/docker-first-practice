"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
if (process.env.NODE_ENV !== "production") {
    dotenv_1.default.config();
}
const port = process.env.PORT;
const app = (0, express_1.default)();
if (process.env.NODE_ENV !== "production") {
    const corsOptions = {
        origin: process.env.WEB_URL,
    };
    app.use((0, cors_1.default)(corsOptions));
}
app.get('/', (_, res) => {
    res.send('Hello World!!!! hehe hoho');
});
app.post('/api/rand', (_, res) => {
    res.json({
        name: 'rand',
        value: Math.random()
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
