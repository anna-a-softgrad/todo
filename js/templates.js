Template = {
	getTodoItem: function(itemId) {
		var str = "<tr id='" + itemId + "'><td class='event'><input type='checkbox' name='itemState' class='changeStateItem'></td><td class='itemText'> <input type='text'></td><td class='removeItem event'>X</td></tr>";
		return str;
	}
}