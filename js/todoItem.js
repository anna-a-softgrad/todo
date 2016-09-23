TodoItem = function() {
	//this.indexItem = как-то задать произвольный инекс
	this.doneItem = false;
}

TodoItem.prototype.getIndex = function() {
	return this.indexItem;
}
TodoItem.prototype.changeState = function() {
	this.doneItem = !this.doneItem; // так можно??
}
TodoItem.prototype.isDone = function() {
	return this.doneItem;
}

/* добавление строки */
/*$('#addItem').click(function(){
	var strAdd = '<tr><td>1</td><td>2</td><td>3</td></tr>';
	$('.main-table').append('<tr><td>1</td><td>2</td><td>3</td></tr>');
})*/

