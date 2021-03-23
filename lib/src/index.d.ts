import { Visitor, SQLLang } from "./visitor";
export { SQLLang } from "./visitor";
import { Token } from "../odata-v4-parser/src/lexer";
export interface SqlOptions {
    useParameters?: boolean;
    type?: SQLLang;
}
/**
 * Creates an SQL query descriptor from an OData query string
 * @param {string} odataQuery - An OData query string
 * @return {string}  SQL query descriptor
 * @example
 * const filter = createQuery("$filter=Size eq 4 and Age gt 18");
 * let sqlQuery = `SELECT * FROM table WHERE ${filter.where}`;
 */
export declare function createQuery(odataQuery: string, options?: SqlOptions): Visitor;
export declare function createQuery(odataQuery: string, options?: SqlOptions, type?: SQLLang): Visitor;
export declare function createQuery(odataQuery: Token, options?: SqlOptions): Visitor;
export declare function createQuery(odataQuery: Token, options?: SqlOptions, type?: SQLLang): Visitor;
/**
 * Creates an SQL WHERE clause from an OData filter expression string
 * @param {string} odataFilter - A filter expression in OData $filter format
 * @return {string}  SQL WHERE clause
 * @example
 * const filter = createFilter("Size eq 4 and Age gt 18");
 * let sqlQuery = `SELECT * FROM table WHERE ${filter}`;
 */
export declare function createFilter(odataFilter: string, options?: SqlOptions): Visitor;
export declare function createFilter(odataFilter: string, options?: SqlOptions, type?: SQLLang): Visitor;
export declare function createFilter(odataFilter: Token, options?: SqlOptions): Visitor;
export declare function createFilter(odataFilter: Token, options?: SqlOptions, type?: SQLLang): Visitor;
