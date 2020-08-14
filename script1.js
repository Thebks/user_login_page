
const inputs = document.querySelectorAll(".input");


function Add(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function Add1(){
    let parent = this.parentNode.parentNode;
    if(this.value === ""){
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", Add);
    input.addEventListener("blur", Add1);
});