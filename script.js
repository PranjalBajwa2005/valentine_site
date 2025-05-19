let messages = [
    "Will you be my Valentine? 💖",
    "ab bhi soch le? 💘",
    "Mere jaisa saaxy ladka nahi mil rha kabhi aur? 💕",
    "AAKHRI BAAR PUCH RHA HU❤️",
    "LAST BAAR 💞",
    "Chal tere liye, SIRF tere liye ek aur baar puch rha hu! 💞"
];

let index = 0;

function acceptProposal() {
    document.body.classList.add("celebrate");
    document.getElementById("popup").innerHTML = `
        <h2>YAY!!!🎉❤️</h2>
        <p>Please give a missed call on "whaterver the number is" and I'll know what to do!!</p>
    `;
    startFireworks();
}

function declineProposal() {
    index = (index + 1) % messages.length;
    document.getElementById("popup").innerHTML = `
        <h2 id="question">${messages[index]}</h2>
        <button class="yes" onclick="acceptProposal()">Yes</button>
        <button class="no" onclick="declineProposal()">No</button>
    `;
}

// FIREWORKS FUNCTION - Never-ending colorful explosions! 💥🎇
function startFireworks() {
    setInterval(() => {
        let firework = document.createElement("div");
        firework.className = "firework";
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;

        // Random Colors for each firework
        let colors = ["yellow", "red", "blue", "green", "purple", "orange", "pink", "cyan"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.background = `radial-gradient(circle, ${randomColor}, white)`;

        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 2000); // Remove firework after animation
    }, 300);
}
