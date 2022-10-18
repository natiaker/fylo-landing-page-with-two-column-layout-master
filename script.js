let input1 = document.querySelector(".input-1");
let input2 = document.querySelector(".input-2");
let input1span = document.getElementById("input-1-span");
let input2span = document.getElementById("input-2-span");

let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function inputValidation(input, inputspan) {
    if(input.value.match(regex)) {
        input.style.border = "";
        inputspan.innerText = "";
        return true;
    } else {
        inputspan.innerText = "Please check your email";
        if(input == input1) {
            inputspan.style.color = "#EF4877";
        } else {
            inputspan.style.color = "#FFFFFF";
        }
        input.style.border = "0.0625rem solid #EF4877";
        return false;
    }
}
