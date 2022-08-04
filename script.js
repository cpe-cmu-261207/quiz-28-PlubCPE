const img = document.querySelector("#img-profile");
const loadingProfile = document.querySelector("#div-loading-card");
const names = document.querySelector("#p-name");
const email = document.querySelector("#p-email");
const address = document.querySelector("#p-address");
const generate = document.querySelector("#btn-random");
const emoji = document.querySelector("#span-gender-icon");

start();

function start() {
  callApi();
  loadingProfile.style.display = "";
}

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  const data = resp.data.results[0];

  img.src = data.picture.large;
  names.innerHTML = `${data.name.first} ${data.name.last}`;
  address.innerHTML = `${data.location.city}, ${data.location.state}`;
  email.innerHTML = data.email;
  if (data.gender == "female") {
    emoji.innerText = "👧";
  } else {
    emoji.innerText = "👨";
  }
}

generate.onclick = () => {
  start();
};

img.onload = () => {
  loadingProfile.style.display = "none";

  generate.style.display = "none";
};
