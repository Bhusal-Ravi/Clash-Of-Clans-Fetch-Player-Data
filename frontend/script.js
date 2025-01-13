import { playerDisplay } from "./playerDisplay.js";

const button = document.querySelector(".fetchPlayer");

button.addEventListener("click", () => {
    let playerTagInput = document.querySelector(".playerTag").value;
    if (!playerTagInput) {
        console.error("Player Tag Is Required");
        alert("Please enter a player tag");
        return;
    }
    playerData(playerTagInput);
});

function playerData(playerTag) {
    // Updated URL to use the Render-deployed backend
    fetch(`https://clash-of-clans-api-handeling.onrender.com/player/${playerTag}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            playerDisplay(data);
        })
        .catch((error) => {
            console.log(error);
        });
}
