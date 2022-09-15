var userData=JSON.parse(localStorage.getItem("userData")) || []
var form=document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault()

    var data={
        email: document.querySelector(".user").value,
        password:document.querySelector(".users").value,
    }
    if(userData===null){
        alert("Please Create an Accoount")
    }
    else if(userData.email===data.email && userData.password ==data.password){
        alert("Sign is Successfull")
        localStorage.setItem("login",JSON.stringify(userData))
        window.location.href="index.html"
    }
    else{
        alert("User Does not Exist")
    }

console.log(data)
})

