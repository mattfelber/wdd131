const input = document.getElementById("favchap");
const button = document.getElementById("submit");
const list = document.getElementById("list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = input.value;

deleteButton.textContent = "❌";
li.append(deleteButton);

li.append(li);





