"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.literal = exports.keys = exports.filter = exports.query = exports.resourcePath = exports.odataUri = exports.Parser = exports.parserFactory = void 0;
const primitiveLiteral_1 = require("./primitiveLiteral");
const expressions_1 = require("./expressions");
const query_1 = require("./query");
const resourcePath_1 = require("./resourcePath");
const odataUri_1 = require("./odataUri");
const parserFactory = function (fn) {
    return function (source, options) {
        options = options || {};
        const raw = new Uint16Array(source.length);
        let pos = 0;
        for (let i = 0; i < source.length; i++) {
            raw[i] = source.charCodeAt(i);
        }
        let result = fn(raw, pos, options.metadata);
        if (!result)
            throw new Error("Fail at " + pos);
        if (result.next < raw.length)
            throw new Error("Unexpected character at " + result.next);
        return result;
    };
};
exports.parserFactory = parserFactory;
class Parser {
    odataUri(source, options) { return exports.parserFactory(odataUri_1.default.odataUri)(source, options); }
    resourcePath(source, options) { return exports.parserFactory(resourcePath_1.default.resourcePath)(source, options); }
    query(source, options) { return exports.parserFactory(query_1.default.queryOptions)(source, options); }
    filter(source, options) { return exports.parserFactory(expressions_1.default.boolCommonExpr)(source, options); }
    keys(source, options) { return exports.parserFactory(expressions_1.default.keyPredicate)(source, options); }
    literal(source, options) { return exports.parserFactory(primitiveLiteral_1.default.primitiveLiteral)(source, options); }
}
exports.Parser = Parser;
function odataUri(source, options) { return exports.parserFactory(odataUri_1.default.odataUri)(source, options); }
exports.odataUri = odataUri;
function resourcePath(source, options) { return exports.parserFactory(resourcePath_1.default.resourcePath)(source, options); }
exports.resourcePath = resourcePath;
function query(source, options) { return exports.parserFactory(query_1.default.queryOptions)(source, options); }
exports.query = query;
function filter(source, options) { return exports.parserFactory(expressions_1.default.boolCommonExpr)(source, options); }
exports.filter = filter;
function keys(source, options) { return exports.parserFactory(expressions_1.default.keyPredicate)(source, options); }
exports.keys = keys;
function literal(source, options) { return exports.parserFactory(primitiveLiteral_1.default.primitiveLiteral)(source, options); }
exports.literal = literal;
//# sourceMappingURL=parser.js.map