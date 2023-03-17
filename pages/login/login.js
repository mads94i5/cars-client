import { API_URL } from "../../settings.js"
import { handleJsonHttpErrors } from "../../utils.js"

const URL = API_URL + "auth/login"

export function initLogin() {
    document.getElementById("login-btn").onclick = login
    document.getElementById("login-message").innerText = ""
}

export function logout() {
    document.getElementById("login-id").style.display="block"
    document.getElementById("logout-id").style.display="none"

    localStorage.clear()
}

async function login(event) {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    // const userDto = {username:username, password:password}
    // const userDto = {username, password}

    const options = {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({username, password})
    }

    const loginMessage = document.getElementById("login-message")
    try {
        const response = await fetch(URL, options)
        .then(response => handleJsonHttpErrors(response))
        localStorage.setItem("user", response.username)
        localStorage.setItem("token", response.token)
        localStorage.setItem("roles", response.roles)
        loginMessage.style.color="darkgreen";
        loginMessage.innerText = "Successfully logged in"

        document.getElementById("login-id").style.display="none"
        document.getElementById("logout-id").style.display="block"
        window.router.navigate("")
    } catch (err) {
        loginMessage.style.color="red";
        loginMessage.innerText = err.message
    }
}