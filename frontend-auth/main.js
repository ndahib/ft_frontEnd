// import {urls} from "./api_urls.js";

//============================Sign Up Route ===============================================
document.getElementById("sign_up_form").addEventListener("submit", async (event) =>
{
    event.preventDefault();
    const email = document.getElementById("signUpemail").value;
    const response = await fetch('http://127.0.0.1/api/signup', {
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
        window.location.href = "verify_page.html"
    }
    else 
    {
        const error = await response.json();
        console.log(error);
    }
})


document.getElementById("LoginGoogle").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = 'http://127.0.0.1/api/social_auth/google';
});
//============================Sign In Route ================================================


document.getElementById("LoginIntra").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = 'http://127.0.0.1/api/social_auth/42';
});