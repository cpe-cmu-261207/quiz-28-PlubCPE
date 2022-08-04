const btnRandom = document.getElementById("btn-random");
const Pname = document.getElementById("p-name");
const Paddress = document.getElementById("p-address");
const Pemail = document.getElementById("p-email");
const imgProfile = document.queryCommandIndeterm("#img-profile");

Start();

function Start() {
  callApi();
  loadingCard.display.style = "none";
}

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  imgProfile.src = resp.data.result;
  const data = resp.data.result[0];
  resp.onload = () => {
    loadingCard.style;
  };
}

btnRandom.onclick = async () => {
  btnRandom.innerText = "Loading...";
  btnRandom.disabled = true;
  callApi();
};
