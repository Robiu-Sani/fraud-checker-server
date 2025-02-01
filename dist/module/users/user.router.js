"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_router = void 0;
const express_1 = __importDefault(require("express"));
const user_controllar_1 = __importDefault(require("./user.controllar"));
const router = express_1.default.Router();
router.post('/create', user_controllar_1.default.createUser);
router.get('/', user_controllar_1.default.getUser);
router.get('/single-user/:id', user_controllar_1.default.getSingleUser);
router.patch('/update-user-byPatch/:id', user_controllar_1.default.updateUser);
router.put('/update-user-byPut/:id', user_controllar_1.default.updateUser);
router.delete('/delete/:id', user_controllar_1.default.deleteUser);
exports.user_router = router;
