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
const user_model_1 = __importDefault(require("./user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createUsersIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.create(payload);
    return result;
});
const updateUserIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const getUserIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.find();
    return result;
});
const getSingleUserByIdIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findById(id);
    return result;
});
const deleteSingleUserByIdIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findByIdAndDelete(id);
    return result;
});
const loginServices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user;
        if (payload.email) {
            user = yield user_model_1.default.findOne({ email: payload.email });
        }
        else if (payload.number) {
            user = yield user_model_1.default.findOne({ number: payload.number });
        }
        if (!user) {
            return {
                status: false,
                message: 'No user found with this email or number.',
            };
        }
        const isPasswordValid = yield bcryptjs_1.default.compare(payload.password, user.password);
        if (!isPasswordValid) {
            return { status: false, message: 'Incorrect password.' };
        }
        const userInfo = Object.assign(Object.assign({}, user.toObject()), { password: undefined });
        return { status: true, message: 'Login successful', data: userInfo };
    }
    catch (error) {
        console.error('Error during login:', error);
        return { status: false, message: 'Something went wrong.' };
    }
});
const userServices = {
    createUsersIntoDB,
    updateUserIntoDB,
    getUserIntoDB,
    getSingleUserByIdIntoDB,
    deleteSingleUserByIdIntoDB,
    loginServices,
};
exports.default = userServices;
