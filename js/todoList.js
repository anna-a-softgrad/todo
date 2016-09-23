TodoList = function() {
	this.idItem = 0;
	this.container = document.getElementById('lastRow');
	this.addItemButton = document.getElementById('addItem');
	this.removeItemButton = document.getElementById('removeItem');
	this.removeAllCompleted =  document.getElementById('deleteAllCompleted');
	this.setAllToComplete =  document.getElementById('setAllToComplete');	

	this.showAll = document.getElementById('showAll');
	this.showActive =  document.getElementById('showActive');
	this.showCompleted =  document.getElementById('showCompleted');

	this.addItemButton.addEventListener("click", this.addTask.bind(this));
	this.removeItemButton.addEventListener("click", this.removeTask.bind(this));
	this.removeAllCompleted.addEventListener("click", this.removeAllCompleted.bind(this));
	this.setAllToComplete.addEventListener("click", this.setAllToComplete.bind(this));

	this.showAll.addEventListener("click", this.showAllTasks.bind(this));
	this.showActive.addEventListener("click", this.showActiveTasks.bind(this));
	this.showCompleted.addEventListener("click", this.showCompletedTasks.bind(this));
}


TodoList.prototype.addTask = function() {
	var taskItem = new TodoItem();

	//save to localstorage
	this.idItem++;
	var obj = JSON.stringify(taskItem);
	Model.setToStorage(this.idItem, obj)

	//painting
	var lastRow = document.getElementById('lastRow');	
	var tempAddTask = Template.addItem();
	lastRow.insertAdjacentHTML('afterend', tempAddTask);
	$(lastRow).removeAttr("id")
}
TodoList.prototype.changeStateTask = function() {
	TodoItem.prototype.changeState();
}
TodoList.prototype.removeTask = function(event) {
	// удалить из массива или списка элемент

	var id = event.target.id
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