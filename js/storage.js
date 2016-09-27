
Storage = {
	setItem: function(key, value) {
		localStorage.setItem(key, value);
	},

	getItem: function(key) {
		return localStorage.getItem(key);
	},

	removeItem: function(key) {
		localStorage.removeItem(key);
	},

	changeState: function(key, value) {
		localStorage.removeItem(key);
		localStorage.setItem(key, value);
	},

	clearAllCompletedItems: function() {
		
	},

	getAllItems: function() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]));
    }

    return values;
	},

	clearAllItems: function() {
		localStorage.clear();
	}
}