
Storage = {
	setItem: function(key, value) {
		localStorage.setItem(key, value);
	},

	getItem: function(key) {
		localStorage.getItem(key);
	},

	removeItem: function(key) {
		localStorage.removeItem(key);
	},

	clearAllCompletedItems: function() {
		localStorage.clear();
	}
}