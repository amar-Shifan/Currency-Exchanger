"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const exchangeController_1 = require("../controller/exchangeController");
const router = express_1.default.Router();
router.get('/', exchangeController_1.renderHome);
router.post('/convert', exchangeController_1.convertController);
exports.default = router;
