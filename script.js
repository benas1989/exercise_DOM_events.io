var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

window.onload = function()
{
	for (let index = 0; index < ul.children.length; index++) {
		const element = ul.children[index];
		element.children[0].onclick = itemDone;
		element.children[1].onclick = itemDelete;
		element.children[1].classList.add("button");
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	var button = document.createElement("button");
	span.appendChild(document.createTextNode(input.value));
	button.innerHTML = "Delete";
	button.classList.add("button");
	li.appendChild(span);
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
	span.onclick = itemDone;
	button.onclick = itemDelete;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function itemDone(item)
{
	if(item.target.classList.contains("done"))
	{
		item.target.classList.remove("done");
	}
	else
	{
		item.target.classList.add("done");
	}
}

function itemDelete(item)
{
	ul.removeChild(item.target.parentElement);
	console.log("Item deleted.");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);