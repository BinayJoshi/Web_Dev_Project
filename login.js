// Simple client‑side login validation with hardcoded demo credentials

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const userInput = document.getElementById("username");
  const passInput = document.getElementById("password");
  const userError = document.getElementById("userError");
  const passError = document.getElementById("passError");

  const DEMO_USER = "admin";
  const DEMO_PASS = "1234";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Clear previous errors
    userError.textContent = "";
    passError.textContent = "";

    const username = userInput.value.trim();
    const password = passInput.value.trim();

    let valid = true;

    if (!username) {
      userError.textContent = "Username is required.";
      valid = false;
    }

    if (!password) {
      passError.textContent = "Password is required.";
      valid = false;
    } else if (password.length < 4) {
      passError.textContent = "Password must be at least 4 characters.";
      valid = false;
    }

    if (!valid) return;

    // Simple hardcoded check
    if (username === DEMO_USER && password === DEMO_PASS) {
      // Optional: save a small flag in sessionStorage
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "index.html";
    } else {
      passError.textContent = "Invalid username or password.";
    }
  });
});
