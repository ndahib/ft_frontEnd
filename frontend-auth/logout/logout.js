
let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwOTkxNDk3LCJpYXQiOjE3MzA5OTA1OTcsImp0aSI6IjRmYmFkZjk4OTdjMjQyODhiMjlmOWE2OWUyY2M0ZDM5IiwidXNlcl9pZCI6NzUsInVzZXJuYW1lIjoiRWxNb3VkZGVuIiwiaXNzIjoidGVhbSB0cmFuc2NlbmRhbmNlIiwiYWN0aW9uIjoibG9naW4iLCJub25jZSI6IjA3ZDdkZjAxMGVhMDFiNDQ4ZDYyMmIyM2QyYmNlOTFkIiwic2NvcGUiOiJsb2dpbiJ9.aGFnw-8f1mYHC54EcRO78Yea5lkvR5NjzdSuA0v6oLg"

logoutButton.addEventListener("click", async (event) => {

    event.preventDefault();
    const response = await fetch('http://127.0.0.1/api/logout', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        }
    });
    if (response.ok)
    {
        console.log("success");
        window.location.href = "login.html"
    }
    else 
    {
        const error = await response.json();
        console.log(error);
    }
});