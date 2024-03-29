const result = document.querySelector(".password");
const copyPassword = document.querySelector(".copy-icon");
const rangeLength = document.querySelector("#rangeLength");
const rangeSlider = document.querySelector("#myRange");
const numbers = document.getElementById("numbers");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const symbols = document.getElementById("symbols");
const generatePassBtn = document.querySelector(".generate-btn > button");

let num = '0123456789';
let upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerC = 'abcdefghijklmnopqrstuvwxyz';
let symb = '~!@#$%^&*';

//  Function to generate a random password (main function) 
const generatePassword = () => {
    let str = "";
    let getPass = "";

    str += numbers.checked ? num : ""
    str += uppercase.checked ? upperC : "";
    str += lowercase.checked ? lowerC : "";
    str += symbols.checked ? symb : "";

    if(str === ""){
        alert("Please select at least one option");
    }

    for(i = 1; i <= rangeSlider.value; i++){
         getPass += str.charAt(Math.floor(Math.random() * str.length));
    }
    return getPass;  
}


//  Function to copy generated password
copyPassword.addEventListener('click', ()=>{
    if(result.textContent != ""){
       navigator.clipboard.writeText(result.textContent);
       copyPassword.setAttribute("data-title", "copied");
       copyPassword.innerHTML = ` <i class="fa-regular fa-circle-check"></i> `

       setTimeout(()=>{
        copyPassword.setAttribute("data-title", "copy");
        copyPassword.innerHTML = ` <i class="fa-regular fa-copy"></i> `
       }, 2000)
    }
});


// Set Length Range according to Range Slider
rangeSlider.addEventListener('input', () =>{
    rangeLength.textContent = rangeSlider.value;
});


//  Function to make a Generate-Password-Button clickable and display result on the Result container
generatePassBtn.addEventListener('click', ()=>{
    result.textContent = generatePassword();   
});
