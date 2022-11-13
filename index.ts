const CLIENT_ID = "";
const CLIENT_SECRET = "";
const API_URL = "https://api-1.adax.no/client-api";

// Authentication
// URL: https://api-1.adax.no/client-api/auth/token
// x-www-form-urlencoded:
// password:
// username:
// grant_type:password

let resp = await fetch(`${API_URL}/auth/token`, {
    method: "POST",
    headers:{
      "Content-Type": "application/x-www-form-urlencoded"
    },    
    body: new URLSearchParams({
        "grant_type": "password",
        "username": CLIENT_ID,
        "password": CLIENT_SECRET
    })
});
let res = await resp.json();
const jwt = res["access_token"];

// GET room temperature: https://api-1.adax.no/client-api/rest/v1/content/
// Bearer token from above

resp = await fetch(`${API_URL}/rest/v1/content/`, {
  headers:{
    "Authorization": `Bearer ${jwt}`
  }, 
});
res = await resp.json();

console.log(res);
