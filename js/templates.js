Template = {
	getTodoItem: function(itemId) {
		var str = "<tr id='" + itemId + "'><td class='event'><input type='checkbox' name='itemState' class='changeStateItem'></td><td> <input type='text' class='itemText'></td><td class='removeItem event'>X</td></tr>";
		return str;
	}
}