class TodoList {
	constructor () {
  	this.items = [];
  	this.archived_items = [];
    this.item_id = 0;
  }

	addItem (item) {
	this.item_id++;
    let list_item = new TodoItem(item, this.item_id);
    this.items.push(list_item);
      
    //console.log(list_item);
    this.render();
  }
  
  removeItem () {
  	let todoItemsToRemove = [];
  	for (let i = 0; i < this.items.length; i++) {
        let currentCheckBox = document.getElementById("chkTodo-" + this.items[i].id);
        console.log(currentCheckBox);
      if (currentCheckBox.checked) {
      	this.archived_items.push(this.items[i]);
        todoItemsToRemove.push(i);   
      }
    }
    for (let x = todoItemsToRemove.length - 1; x >= 0; x-- ) {
    	this.items.splice(todoItemsToRemove[x], 1);
    }

    this.render ();
  }
  
  render () {
    let list = document.getElementById("todo-items");
    list.innerHTML = "";
    
    for (let currentItem of this.items) {
      let todoItemDiv = document.createElement("div");
      todoItemDiv.id = "todoitem-" + currentItem.id;


	  let todoItemCheck = document.createElement("input");
      todoItemCheck.type = "checkbox";
      todoItemCheck.id = "chkTodo-" + currentItem.id;

      todoItemDiv.appendChild(todoItemCheck);
      todoItemDiv.innerHTML += ' ' + currentItem.title;
    
      list.appendChild(todoItemDiv);
    }

		list = document.getElementById("todo-items-archive");
    list.innerHTML = "";
    
    for (let currentItem of this.archived_items) {
      let todoItemDiv = document.createElement("div");
      todoItemDiv.id = "todoitem-" + currentItem.id;

      todoItemDiv.innerHTML += ' ' + currentItem.title;
    
      list.appendChild(todoItemDiv)
    }
  }
}

class TodoItem {
	constructor (title = "", id) {
  	this.title = title;
    this.id = id;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {

	let todo_list = new TodoList();

	document.getElementById("btnAddTodo").addEventListener("click", function (e) {
  	let todoItem = document.getElementById("todo-text").value;
    
    todo_list.addItem(todoItem);
  })

	document.getElementById("btnFinishTodo").addEventListener("click", function (e) {
  	todo_list.removeItem();
  })
});








