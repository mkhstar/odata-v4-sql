"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilter = exports.createQuery = exports.SQLLang = void 0;
const visitor_1 = require("./visitor");
var visitor_2 = require("./visitor");
Object.defineProperty(exports, "SQLLang", { enumerable: true, get: function () { return visitor_2.SQLLang; } });
const parser_1 = require("../odata-v4-parser/src/parser");
function createQuery(odataQuery, options = {}, type) {
    if (typeof type != "undefined" && type)
        options.type = type;
    let ast = ((typeof odataQuery == "string" ? parser_1.query(odataQuery) : odataQuery));
    return new visitor_1.Visitor(options).Visit(ast).asType();
}
exports.createQuery = createQuery;
function createFilter(odataFilter, options = {}, type) {
    if (typeof type != "undefined" && type)
        options.type = type;
    let ast = ((typeof odataFilter == "string" ? parser_1.filter(odataFilter) : odataFilter));
    return new visitor_1.Visitor(options).Visit(ast).asType();
}
exports.createFilter = createFilter;
//# sourceMappingURL=index.js.map