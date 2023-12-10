document.getElementsByClassName("form")[0].addEventListener("submit", (event) => {
    event.preventDefault();
    const parIncorrectData = document.getElementsByClassName("passwordProblem")[0];
    const checkPass = event.target.password.value.toString();
    if(event.target.firstName.value === "" || event.target.lastName.value === "" || event.target.email.value === "" || event.target.pass.value === "" || event.target.verPass.value === ""){
        parIncorrectData.style.display = "block";
        parIncorrectData.textContent = "There is an empty field!";
    }
    else if(checkPass.length < 8){
        parIncorrectData.style.display = "block";
        parIncorrectData.textContent = "The password must be at least 8 characters!";
    }
    else if(event.target.pass.value != event.target.verPass.value || parIncorrectData.style.display === "none"){
        parIncorrectData.style.display = "block";
        parIncorrectData.textContent = "The passwords don't match!";
    }
    else{
        parIncorrectData.style.display = "none";
        event.target.firstName.value = "";
        event.target.lastName.value = "";
        event.target.email.value = "";
        event.target.pass.value = "";
        event.target.verPass.value = "";
    }
});