let ipLabel = document.querySelector(".ip");

fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    ipLabel.innerHTML = data.ip;
  })
  .catch((error) => ipLabel.innerHTML = error);
