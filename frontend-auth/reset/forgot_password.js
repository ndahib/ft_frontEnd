// import {urls} from "./api_urls.js";

//============================Sign Up Route ===============================================
document.getElementById("reset_pass_form").addEventListener("submit", async (event) =>
{
    event.preventDefault();
    console.log("enter here");
    const email = document.getElementById("toSend").value;
    console.log(email)
    const response = await fetch('http://127.0.0.1/api/reset', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
        })
    });
    if (response.ok)
    {
        console.log("success");
        // window.location.href = "verify_page.html"
    }
    else 
    {
        const error = await response.json();
        console.log(error);
    }
})

//============================Sign In Route ================================================