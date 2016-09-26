TodoList = function() {
	this.itemID = 0;
	Model.clearAllItems();

	$(document).on('click', '#addItem', this.addTask.bind(this));
	$(document).on('click', '.changeStateItem', this.changeStateTask.bind(this));
	$(document).on('click', '.removeItem', this.removeTask.bind(this));

	$(document).on('click', '#showAll', this.showAllTasks.bind(this));
	$(document).on('click', '#showActive', this.showActiveTasks.bind(this));
	$(document).on('click', '#showCompleted', this.showCompletedTasks.bind(this));
	$(document).on('click', '#deleteAllCompleted', this.removeAllCompleted.bind(this));
	$(document).on('click', '#setAllToComplete', this.setAllToComplete.bind(this));
}


TodoList.prototype.addTask = function() {
	this.itemID++;
	var taskItem = new TodoItem(this.itemID);

	//  find last rowId
	var allItems = Model.getAllItems();

	var lastItemId = 0;
	for(i=0; i < allItems.length; i++) {
		var item = JSON.parse(allItems[i]);
		lastItemId = item.itemID;
	}

	// painting
	var lastRow = document.getElementById(lastItemId);	
	var tempAddTask = Template.addItem(this.itemID);
	lastRow.insertAdjacentHTML('afterend', tempAddTask);

	// save to localstorage
	var obj = JSON.stringify(taskItem);
	Model.setToStorage(this.itemID, obj);

}
TodoList.prototype.changeStateTask = function() {
	TodoItem.prototype.changeState();
}
TodoList.prototype.removeTask = function(event) {
	// удалить из массива или списка элемент

	var itemId = $(event.target).parent()[0].id;
	var rowToRemoveStr = "table#main-table tr#" + itemId;

	// painting   
	//var tempItem = Model.getStorageItem(itemId);
	$(rowToRemoveStr).remove();

	// remove from localstorage
	Model.removeStorageItem(itemId);
}

TodoList.prototype.showAllTasks = function() {
	for (var i = 0; i < this.tasksArray.length; i++) {
  			// отобразить
  		}
}
TodoList.prototype.showActiveTasks = function() {
	// проверить все задачи на done
	var arr = this.tasksArray;

	for (var i = 0; i < arr.length; i++) {
  		if (arr[i].isDone == false) {
  			// отобразить
  		}
	}
}
TodoList.prototype.showCompletedTasks = function() {
	// проверить все задачи на done
	var arr = this.tasksArray;

	for (var i = 0; i < arr.length; i++) {
  		if (arr[i].isDone == true) {
  			// отобразить
  		}
	}
}

TodoList.prototype.removeAllCompleted = function() {
	//remove from localstorage

	Model.clearAllCompletedItems();

}
TodoList.prototype.setAllToComplete = function() {
	for (var i = 0; i < this.tasksArray.length; i++) {
  			// отобразить
  	}
}