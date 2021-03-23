"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Literal = void 0;
function integer(value) {
    return +value;
}
function float(value) {
    switch (value) {
        case 'INF': return Infinity;
        case '-INF': return -Infinity;
        default: return +value;
    }
}
class Literal {
    constructor(type, value) {
        let result = (this[type] || (_ => _))(value);
        this.valueOf = () => result;
    }
    static convert(type, value) {
        return (new Literal(type, value)).valueOf();
    }
    'Edm.String'(value) { return decodeURIComponent(value).slice(1, -1).replace(/''/g, "'"); }
    'Edm.Byte'(value) { return integer(value); }
    'Edm.SByte'(value) { return integer(value); }
    'Edm.Int16'(value) { return integer(value); }
    'Edm.Int32'(value) { return integer(value); }
    'Edm.Int64'(value) { return integer(value); }
    'Edm.Decimal'(value) { return float(value); }
    'Edm.Double'(value) { return float(value); }
    'Edm.Single'(value) { return float(value); }
    'Edm.Boolean'(value) {
        value = value || '';
        switch (value.toLowerCase()) {
            case 'true': return true;
            case 'false': return false;
            default: return undefined;
        }
    }
    'Edm.Guid'(value) { return decodeURIComponent(value); }
    'Edm.Date'(value) { return value; }
    'Edm.DateTimeOffset'(value) { return new Date(value); }
    'null'(value) { return null; }
    'Edm.TimeOfDay'(value) { return new Date(`1970-01-01T${value}Z`); }
    'Edm.Duration'(value) {
        var m = value.match(/P([0-9]*D)?T?([0-9]{1,2}H)?([0-9]{1,2}M)?([\.0-9]*S)?/);
        if (m) {
            var d = new Date(0);
            for (var i = 1; i < m.length; i++) {
                switch (m[i].slice(-1)) {
                    case 'D':
                        d.setDate(parseInt(m[i]));
                        continue;
                    case 'H':
                        d.setHours(parseInt(m[i]));
                        continue;
                    case 'M':
                        d.setMinutes(parseInt(m[i]));
                        continue;
                    case 'S':
                        d.setSeconds(parseFloat(m[i]));
                        continue;
                }
            }
            return d.getTime();
        }
        throw new Error('Invalid Duration');
    }
}
exports.Literal = Literal;
//# sourceMappingURL=Literal.js.map