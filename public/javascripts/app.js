
document.querySelector("#submit").addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value
    let comments = document.getElementById("comments").value

    const data = {name, email, comments}

    fetch("/submit", {
      
        // Adding method type
        method: "POST",
          
        // Adding body or contents to send
        body: JSON.stringify(data),
          
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
      
    // Converting to JSON
    .then(response => response.json())
      
    // Displaying results to console
    .then(json => {
        console.log(json);
        console.log(json.message);
        if (json.message === "success") {
            let successDiv = document.createElement("div");
            successDiv.classList.add("alert", "alert-success", "alert-dismissible", "w-100")
            successDiv.innerHTML = "Form submission successfully, I will get back to you as soon as possible";
            const header = document.getElementById("header")
            console.log(header)
            console.log(successDiv)
            header.prepend(successDiv)
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("comments").value = "";
            window.scrollTo(0,0)
            
        }
    })
    .catch((error)=>{
        console.log(error);
        let failureDiv = document.createElement("div");
        failureDiv.classList.add("alert", "alert-danger", "alert-dismissible", "w-100")
        failureDiv.innerHTML = "Form submission successfully, I will get back to you as soon as possible";
        const header = document.getElementById("header")
        console.log(header)
        console.log(failureDiv)
        header.prepend(failureDiv)
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("comments").value = "";
        window.scrollTo(0,0)
    });
}

