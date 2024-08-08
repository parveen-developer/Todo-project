
function addTask() {
  let input = document.querySelector("#taskInput");
  let output = document.querySelector("#taskList");
  

  if(input.value.trim() !== ""){
    let push = document.createElement("li");
    push.textContent = input.value;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      output.removeChild(push);
    };

    push.appendChild(deleteButton);
    output.appendChild(push);
    input.value = "";
  };

};