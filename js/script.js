// Add student info dynamically
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("studentInfo").textContent =
      "Name: Ebhool Lamichhane | ID: 200593232";
  });
  
  // Function to get random dog image using Dog API
  function getDogImage() {
    const apiKey = "live_ccyWfn24Iy6xXvdbdkTQh9hXLD36xQSJwDAZ53SRsrXHYDzWl8aEfzUHDEQ9zmPY";
  const url = "https://api.thedogapi.com/v1/images/search";
  
    fetch(url, {
      headers: {
        "x-api-key": apiKey
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch dog image.");
        }
        return response.json();
      })
      .then(data => {
        const imageUrl = data[0].url;
        document.getElementById("dogDisplay").innerHTML = `
          <p>Here's a random dog!</p>
          <img src="${imageUrl}" alt="Cute Dog" />
        `;
      })
      .catch(error => {
        document.getElementById("dogDisplay").textContent = "Error: " + error.message;
      });
  }
  
  document.getElementById("getDogBtn").addEventListener("click", getDogImage);
  