"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCounterAllowed = void 0;
const isCounterAllowed = (counter, counters) => {
    var _a, _b;
    if (!counters) {
        return true;
    }
    if ((_a = counters.exclude) === null || _a === void 0 ? void 0 : _a.includes(counter)) {
        return false;
    }
    else if ((_b = counters.include) === null || _b === void 0 ? void 0 : _b.includes(counter)) {
        return true;
    }
    return false;
};
exports.isCounterAllowed = isCounterAllowed;
