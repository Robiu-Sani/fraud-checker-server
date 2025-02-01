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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = __importDefault(require("./user.services"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield user_services_1.default.createUsersIntoDB(payload);
        res.json({
            status: true,
            message: 'User created successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'User is not created successfully',
            error,
        });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = yield user_services_1.default.updateUserIntoDB(id, payload);
        res.json({
            status: true,
            message: 'User updated successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'User is not updated successfully',
            error,
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield user_services_1.default.deleteSingleUserByIdIntoDB(id);
        res.json({
            status: true,
            message: 'User deleted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'User is not deleted successfully',
            error,
        });
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield user_services_1.default.getSingleUserByIdIntoDB(id);
        res.json({
            status: true,
            message: 'User get successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'User is not get successfully',
            error,
        });
    }
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_services_1.default.getUserIntoDB();
        res.json({
            status: true,
            message: 'User get successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'User is not get successfully',
            error,
        });
    }
});
const userControllar = {
    createUser,
    updateUser,
    deleteUser,
    getSingleUser,
    getUser,
};
exports.default = userControllar;
