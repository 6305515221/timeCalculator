// let inputElement=document.getElementById("inputElement")
// let inputElement1=document.getElementById("inputElement1")
// let outputText=document.getElementById("outputText")

// let output=document.getElementById("output")


// function buttonElement() {
//     if(inputElement.value === '' || inputElement1.value === '') {
//         outputText.textContent='Please Enter Valid no.of Hours'
//         outputText.style.color='white'
//         output.textContent=''
//     }
//     else {
//         outputText.textContent=''
//         let hoursInput=inputElement.value 
//         let minutesInput=inputElement1.value
//         let hoursSeconds=parseInt(hoursInput)*3600
//         let minutesSeconds=parseInt(minutesInput)*60
//         let outputButton=document.createElement("button")
//         outputButton.classList.add('output')
//         outputButton.textContent=hoursSeconds+minutesSeconds+'S'
//         output.appendChild(outputButton)

//     }
//     return;
// }








let inputElement=document.getElementById("inputElement")
let inputElement1=document.getElementById("inputElement1")
let outputText=document.getElementById("outputText")

let output=document.getElementById("output")


function buttonElement() {
    if(inputElement.value === '' || inputElement1.value === '') {
        outputText.textContent='Please Enter Valid no.of Hours'
        outputText.style.color='white'
        output.textContent=''
        output.style.display='none'
    }
    else {
        outputText.textContent=''
        let hoursInput=inputElement.value 
        let minutesInput=inputElement1.value
        let hoursSeconds=parseInt(hoursInput)*3600
        let minutesSeconds=parseInt(minutesInput)*60
        output.textContent=hoursSeconds+minutesSeconds
        output.style.display='block';
    }
}
