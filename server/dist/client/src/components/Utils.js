"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.dateParser = void 0;
const dateParser = (num) => {
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    let timestamp = Date.parse(num);
    let date = new Date(timestamp).toLocaleDateString("fr-FR", options);
    return date.toString();
};
exports.dateParser = dateParser;
const isEmpty = (value) => {
    return (value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0));
};
exports.isEmpty = isEmpty;
//# sourceMappingURL=Utils.js.map