TodoList = function() {
	this.todoItems = {};
	this.itemID = 0;
	// check state jo showing !!! this.itemShowing = 

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
	this.todoItems[this.itemID] = new TodoItem(this.itemID);

	// painting
	var table = document.getElementById("main-table");
	var tempAddTask = this.todoItems[this.itemID].render(table);

	// save to localstorage
	var obj = JSON.stringify(this.todoItems[this.itemID]);
	Model.setToStorage(this.itemID, obj);

}
TodoList.prototype.changeStateTask = function(event) {
	var itemID = $(event.target).parents("tr")[0].id;

	//painting
	this.todoItems[itemID].changeState();

	// change state in data
	var obj = JSON.stringify(this.todoItems[itemID]);
	Model.changeItemState(itemID, obj);
}
TodoList.prototype.removeTask = function(event) {
	var itemID = $(event.target).parents("tr")[0].id;

	// painting   
	this.todoItems[itemID].removeItem();

	// remove from localstorage
	Model.removeStorageItem(itemID);
}
TodoList.prototype.showAllTasks = function() {
	var allItems = Model.getAllItems();

	for (i = 0; i < allItems.length; i++){
		var item = JSON.parse(allItems[i]);
			this.todoItems[item.itemID].showItem();
	}
}
TodoList.prototype.showActiveTasks = function() {
	var allItems = Model.getAllItems();

	for (i = 0; i < allItems.length; i++){
		var item = JSON.parse(allItems[i]);

		if (item.itemDone == false){
			this.todoItems[item.itemID].showItem();
		}
		else {
			this.todoItems[item.itemID].hideItem();
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