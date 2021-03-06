window.vjs = window.vjs || {};

(function(ns) {
	window.vjs.utils = Utils;

	function Utils() {}
	Utils.getFunctionName = getFunctionName;
	Utils.isObject = isObject;
	Utils.isObjectInstance = isObjectInstance;
	Utils.isPrimitive = isPrimitive;

	function getFunctionName(functionRef) {
		// functionRef	- reference of function whose name need to retrieved
		// Don't call, instead send reference e.g. pass  Object.toString instead of Object.toString()
		
		// Match:
		// - the beginning of the string (IE have new line in front of function name)
		// - the word 'function'
		// - at least some whitespace
		// - capture one or more valid javascript identifier characters (UPDATE: IE doesn't have any space so ? instead of +)
		// - optionally followed by whitespace
		// - followed by an opening brace
		var matchResult = /^\n?function\s?([\w\$]*)\s*\(/.exec(functionRef.toString());
		if(matchResult && matchResult.length > 0) {
			return matchResult[0] + ")";
		} else if(functionRef.constructor){
            return getFunctionName(functionRef.constructor)
        }

		return 'null';
	}

	function isObject(value) {
        return value !== null && typeof value === 'object';
    }

    function isObjectInstance(value) {
        return value instanceof Object;
    }

    function isPrimitive(value) {
        var result = false;
        if(value === null || value === undefined || !isObjectInstance(value)) {
            result = true;
        }
        return result;
    }

}(window.vjs))