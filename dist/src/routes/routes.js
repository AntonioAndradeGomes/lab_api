"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const associations_routes_1 = require("../modules/associateExamLab/routes/associations.routes");
const exam_routes_1 = require("../modules/exam/routes/exam.routes");
const laboratory_routes_1 = require("../modules/laboratory/routes/laboratory.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (request, response) => {
    return response.json({ message: 'Hello world', });
});
router.use('/laboratories', laboratory_routes_1.laboratoryRoutes);
router.use('/exams', exam_routes_1.examRoutes);
router.use('/associate', associations_routes_1.associteRouter);
