var friends=298;
var newfriend=document.querySelector("#friendtotal")
function removerequest(){
    var remove = document.querySelector("#req")
    remove.parentNode.removeChild(remove);

}

function addrequest(){
    var remove = document.querySelector("#req")
    remove.parentNode.removeChild(remove);
friends++;
newfriend.innerText= "Your Connections: " +friends;
}
var nameA=document.querySelector("#namechange")
function edit(){
    nameA.innerText="Bruce Wayne";

}