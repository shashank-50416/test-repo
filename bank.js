function details(){
    let value = +prompt("Enter your Atm pin");
    const pin= 9445

    const valid = value == pin

    if(valid){
        alert("welcome Acess Graented")
        window.location.href='account.html';
    }
    else{
        alert("na account dobhudham annukunnava dash na kodaka")
    }
}
function details2(){
    let value = +prompt("Enter your Atm pin");
    const pin= 9445

    const valid = value == pin

    if(valid){
        alert("welcome Acess Graented")
       
    }
    else{
        alert("sorry")
    }
}
function details3(){
    let value = +prompt("Enter your Atm pin");
    const pin= 9445

    const valid = value == pin

    if(valid){
        alert("welcome Acess Graented")
    }
    else{
        alert("Thank You for Entering Wrong Password")
    }
}
