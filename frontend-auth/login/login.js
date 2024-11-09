let accessToken = "";
document.getElementById("form").addEventListener("submit", async (event) => {

    event.preventDefault();
    const email = document.getElementById("loginEmail").value;

    const password = document.getElementById("loginPassword").value;

    const response = await fetch('http://127.0.0.1/api/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const responseText = await response.text();
    
    if (response.ok) {
        const data = JSON.parse(responseText);
        console.log(data)
        accessToken = data["access"];
        console.log(accessToken);  
    } else {
        console.error("Error:", responseText);
    }
})

export { accessToken };
//============================Sign In Route ================================================