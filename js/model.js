Model  = {
	// localStorage methods
	setToStorage: function(key, value) {
		Storage.setItem(key, value);
	},

	getToStorage: function(key) {
		Storage.getItem(key);
	},

	removeToStorage: function(key) {
		Storage.removeItem(key);
	},
	
	clearAllCompletedItems: function() {
		Storage.clearAllCompletedItems();
	}

	// TodoList methods

	
}