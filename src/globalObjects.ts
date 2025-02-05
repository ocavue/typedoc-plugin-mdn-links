const baseLink =
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects";

const knownGlobalObjects = new Set([
    // Value properties
    "Infinity",
    "NaN",
    "undefined",
    "globalThis",

    // Function properties
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "encodeURI",
    "encodeURIComponent",
    "decodeURI",
    "decodeURIComponent",

    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",

    // Error objects
    "Error",
    "AggregateError",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",

    // Numbers and dates
    "Number",
    "BigInt",
    "Math",
    "Date",

    // Text processing
    "String",
    "RegExp",

    // Indexed collections
    "Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array",

    // Keyed collections
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",

    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",

    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    "AsyncGenerator",
    "AsyncGeneratorFunction",
    // "IteratorResult", No file on MDN yet https://github.com/mdn/content/issues/23131

    // Reflection
    "Reflect",
    "Proxy",

    "Intl",
    "WebAssembly",
]);

const knownScopedGlobalObjects = {
    // Internationalization
    Collator: "Intl/Collator",
    DateTimeFormat: "Intl/DateTimeFormat",
    ListFormat: "Intl/ListFormat",
    NumberFormat: "Intl/NumberFormat",
    PluralRules: "Intl/PluralRules",
    RelativeTimeFormat: "Intl/RelativeTimeFormat",
    Locale: "Intl/Locale",

    // WebAssembly
    Module: "WebAssembly/Module",
    Instance: "WebAssembly/Instance",
    Memory: "WebAssembly/Memory",
    Table: "WebAssembly/Table",
    CompileError: "WebAssembly/CompileError",
    LinkError: "WebAssembly/LinkError",
    RuntimeError: "WebAssembly/RuntimeError",
};

export function resolveGlobalName(name: string) {
    if (knownGlobalObjects.has(name)) {
        return `${baseLink}/${name}`;
    }

    if (knownScopedGlobalObjects.hasOwnProperty(name)) {
        return `${baseLink}/${knownScopedGlobalObjects[name as never]}`;
    }
}
