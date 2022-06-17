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
exports.uploadProfil = void 0;
const user_model_1 = __importDefault(require("./../models/user.model"));
const errors_utils_1 = require("./../utils/errors.utils");
const uploadProfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.file.mimetype != "image/jpg" &&
            req.file.mimetype != "image/png" &&
            req.file.mimetype != "image/jpeg")
            throw Error("invalid file");
        if (req.file.size > 500000)
            throw Error("max size");
    }
    catch (err) {
        const errors = (0, errors_utils_1.uploadErrors)(err);
        return res.status(201).json({ errors });
    }
    const fileName = req.body.name + ".jpg";
    try {
        yield user_model_1.default.findByIdAndUpdate(req.body.userId, { $set: { picture: "./uploads/profil/" + fileName } }, { new: true, upsert: true, setDefaultsOnInsert: true })
            .then((docs) => res.status(201).send(docs))
            .catch((err) => res.status(500).send({ message: err }));
    }
    catch (err) {
        return res.status(500).send({ message: err });
    }
});
exports.uploadProfil = uploadProfil;
//# sourceMappingURL=upload.controller.js.map