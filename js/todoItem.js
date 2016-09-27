TodoItem = function(itemId) {
	//this.indexItem = как-то задать произвольный инекс
	this.itemDone = false;
	this.itemID = itemId;
	this.title = '';
}
TodoItem.prototype.render = function(container) {
	this.$template = $(Template.getTodoItem(this.itemID));
	$(container).append(this.$template);
}
TodoItem.prototype.removeItem = function() {
	this.$template.remove();
}
TodoItem.prototype.changeState = function() {
	if (this.itemDone == false) {
			this.$template.addClass('taskIsDone');
			this.$template.addClass('textIsDone');
		}
	else {
		this.$template.removeClass('taskIsDone');	
		this.$template.removeClass('textIsDone');	
	}

	this.itemDone = !this.itemDone;
}
TodoItem.prototype.showItem = function() {
	this.$template.removeClass('taskIsDone');
},
TodoItem.prototype.hideItem = function() {
	this.$template.addClass('taskIsDone');
}