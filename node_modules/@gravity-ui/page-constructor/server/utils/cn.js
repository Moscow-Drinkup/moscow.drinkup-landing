"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootCn = exports.block = exports.cn = exports.NAMESPACE = void 0;
const classname_1 = require("@bem-react/classname");
const constants_1 = require("../components/constants");
exports.NAMESPACE = 'pc-';
exports.cn = (0, classname_1.withNaming)({ e: '__', m: '_' });
exports.block = (0, classname_1.withNaming)({ n: exports.NAMESPACE, e: '__', m: '_' });
exports.rootCn = (0, exports.cn)(constants_1.UIKIT_ROOT_CLASS);
