"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
        unique: true,
        lowercase: true,
        trim: true,
    },
    number: {
        type: mongoose_1.default.Schema.Types.Mixed,
        required: false,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    type: {
        type: String,
        enum: ['user', 'admin'],
        required: true,
        default: 'user',
    },
}, {
    timestamps: true,
});
const Users = mongoose_1.default.model('users', userSchema);
exports.default = Users;
