


function add(){
    let num11=document.getElementById("num1").value
    let num22=document.getElementById("num2").value
    let result1=document.getElementById("result")
    let result11=+num11 + +num22
    result1.innerText="Sum : "+result11
}
function sub(){
    let num11=document.getElementById("num1").value
    let num22=document.getElementById("num2").value
    let result1=document.getElementById("result")
    let result11=+num11 - +num22
    result1.innerText="Difference : "+result11
}
function mul(){
    let num11=document.getElementById("num1").value
    let num22=document.getElementById("num2").value
    let result1=document.getElementById("result")
    let result11=+num11 * +num22
    result1.innerText="Product : "+result11
}
function div(){
    let num11=document.getElementById("num1").value
    let num22=document.getElementById("num2").value
    let result1=document.getElementById("result")
    let result11=+num11 / +num22
    result1.innerText="Division : "+result11
}