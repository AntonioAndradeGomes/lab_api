"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const celebrate_1 = require("celebrate");
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const AppError_1 = require("./config/errors/AppError");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(routes_1.router);
app.use((0, celebrate_1.errors)());
app.use((err, request, response, NextFunction) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({ status: 'error', message: err.message });
    }
    console.log(err);
    return response.status(500).json({ status: 'error', message: 'Internal server error' });
});
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server in running in port ${PORT}.`));
