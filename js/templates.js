Template = {
	addItem: function(itemId) {
		var str = "<tr id='" + itemId + "'><td class='changeStateItem event'><input type='checkbox' name='itemState'></td><td class='itemText'> <input type='text'></td><td class='removeItem event'>X</td></tr>";
		return str;
	}
}