TodoList = function() {
	this.SHOW_ALL = 'showAll';
	this.SHOW_ACTIVE = 'showAcive';
	this.SHOW_COMPLETED = 'showCompleted';

	this.todoItems = {};
	this.itemID = 0;
	this.taskDisplaying = this.SHOW_ACTIVE;

	// check state jo showing !!! this.itemShowing = 

	Model.clearAllItems();

	$(document).on('click', '#addItem', this.addTask.bind(this));
	$(document).on('click', '.changeStateItem', this.changeStateTask.bind(this));
	$(document).on('click', '.removeItem', this.removeTask.bind(this));	
	$(document).on('keyup', '.itemText', this.changeText.bind(this));

	$(document).on('click', '#showAll', this.showAllTasks.bind(this));
	$(document).on('click', '#showActive', this.showActiveTasks.bind(this));
	$(document).on('click', '#showCompleted', this.showCompletedTasks.bind(this));
	$(document).on('click', '#deleteAllCompleted', this.removeAllCompleted.bind(this));
	$(document).on('click', '#setAllToComplete', this.setAllToComplete.bind(this));
}

TodoList.prototype.changeText = function(event) {
	var itemID = $(event.target).parents("tr")[0].id;

	this.todoItems[itemID].title = event.target.value;

	// change text in data
	var obj = JSON.stringify(this.todoItems[itemID]);
	Model.changeItemState(itemID, obj);
}
TodoList.prototype.addTask = function() {
	if (this.taskDisplaying == this.SHOW_ALL || this.taskDisplaying == this.SHOW_ACTIVE) {
		this.itemID++;
		this.todoItems[this.itemID] = new TodoItem(this.itemID);

		// painting
		var table = document.getElementById("main-table");
		var tempAddTask = this.todoItems[this.itemID].render(table);

		// save to localstorage
		var obj = JSON.stringify(this.todoItems[this.itemID]);
		Model.setToStorage(this.itemID, obj);
	}
}
TodoList.prototype.changeStateTask = function(event) {
	var itemID = $(event.target).parents("tr")[0].id;

	//painting
	this.todoItems[itemID].changeState();

	// if all items are showing
	if (this.taskDisplaying == this.SHOW_ALL) {
		this.todoItems[itemID].showItem();		
	}
	if (this.taskDisplaying == this.SHOW_COMPLETED) {
		this.todoItems[itemID].hideItem();		
	}

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
TodoList.prototype.showAllTasks = function(event) {
	checkDisplayingTasks(event);
	this.taskDisplaying = this.SHOW_ALL;

	var allItems = Model.getAllItems();

	for (i = 0; i < allItems.length; i++){
		var item = JSON.parse(allItems[i]);
			this.todoItems[item.itemID].showItem();
	}
}
TodoList.prototype.showActiveTasks = function(event) {
	checkDisplayingTasks(event);
	this.taskDisplaying = this.SHOW_ACTIVE;

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
TodoList.prototype.showCompletedTasks = function(event) {
	checkDisplayingTasks(event);
	this.taskDisplaying = this.SHOW_COMPLETED;

	var allItems = Model.getAllItems();

	for (i = 0; i < allItems.length; i++){
		var item = JSON.parse(allItems[i]);

		if (item.itemDone == true){
			this.todoItems[item.itemID].showItem();
		}
		else {
			this.todoItems[item.itemID].hideItem();
		}
	}
}
TodoList.prototype.removeAllCompleted = function() {

	var allItems = Model.getAllItems();

	for (i = 0; i < allItems.length; i++){
		var item = JSON.parse(allItems[i]);

		if (item.itemDone == true){
			this.todoItems[item.itemID].removeItem();
			Model.removeStorageItem(item.itemID);
		}
	}
}
TodoList.prototype.setAllToComplete = function() {
	var allItems = Model.getAllItems();

	for (i = 0; i < allItems.length; i++){
		var item = JSON.parse(allItems[i]);

		if (item.itemDone == false){
			this.todoItems[item.itemID].changeState();
			if (this.taskDisplaying == this.SHOW_ALL || this.taskDisplaying == this.SHOW_COMPLETED) {
				this.todoItems[item.itemID].showItem();
			}

			var obj = JSON.stringify(this.todoItems[item.itemID]);
			Model.changeItemState(item.itemID, obj);
		}
	}
}
function checkDisplayingTasks(event) {
	$('.taskDisplay div').removeClass('checkedShowing');
	$(event.target).addClass('checkedShowing');
}