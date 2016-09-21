/* класс контейнера с задачами*/

Container = function() {
	this.tasksArray = []; // возмжно есть варианты получше - типа списка, чтобы удобно было обращаться и удалять нужный элемент.
}

Container.prototype.addTask = function() {
	// создать новый экземпляр класса задач
	var taskItem = new Task();

	// добавить его в массив 
	this.tasksArray.push(taskItem);
}

Container.prototype.removeTask = function() {
	// удалить из массива или списка элемент
}

Container.prototype.removeAllTasks = function() {
	this.tasksArray = [];
}

Container.prototype.changeStateTask = function() {
	Task.prototype.changeState();
}


/* Класс задач*/

Task = function() {
	//this.indexItem = как-то задать произвольный инекс
	this.doneItem = false;
}

Task.prototype.getIndex = function() {
	return this.indexItem;
}
Task.prototype.changeState = function() {
	this.doneItem = !this.doneItem; // так можно??
}
Task.prototype.isDone = function() {
	return this.doneItem;
}

/* добавление строки */
$('#add-item').click(function(){
	var strAdd = '<tr><td>1</td><td>2</td><td>3</td></tr>';
	$('.main-table').append('<tr><td>1</td><td>2</td><td>3</td></tr>');
})

