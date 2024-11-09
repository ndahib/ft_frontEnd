//============================Sign Up Route ===============================================
document.getElementById("finished_sign_up_form").addEventListener("submit", async (event) =>
{
    event.preventDefault();
    const username = document.getElementById("usernameButton").value;
    console.log(username);
    const password = document.getElementById("PasswordButton").value;
    console.log(password);
    const confirmPassword = document.getElementById("confirmPasswordButton").value;
    console.log(confirmPassword);
    if (password !== confirmPassword)
    {
        alert("passwords do not match");
    }
    console.log("Come to here");
    const response = await fetch('http://127.0.0.1/api/signup/complete', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password,
        })
    });
    if (response.ok)
    {
        console.log("success");
        window.location.href = "/"
    }
    else 
    {
        const error = await response.json();
        console.log(error);
    }
})

//============================Sign In Route ================================================