Model  = {
	// localStorage methods
	setToStorage: function(key, value) {
		Storage.setItem(key, value);
	},

	getStorageItem: function(key) {
		return Storage.getItem(key);
	},

	removeStorageItem: function(key) {
		Storage.removeItem(key);
	},
	
	clearAllCompletedItems: function() {
		Storage.clearAllCompletedItems();
	},

	getAllItems:function() {
		return Storage.getAllItems();
	},

	clearAllItems: function() {
		Storage.clearAllItems();
	}

	// TodoList methods

	
}