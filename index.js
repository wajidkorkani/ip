let ipLabel = document.querySelector(".ip");
fetch("https://api.ipify.org?format=json")
.then((data)=> data.json())
.then((data) => ipLabel.innerHTML = data.ip)
.catch((error)=> ipLabel.innerHTML = error)