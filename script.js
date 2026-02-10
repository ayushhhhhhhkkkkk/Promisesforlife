
const promises = [
"I'll always love you more than I can.",
"I'll always respect you & take best care of you.",
"It will always be us vs the issues.",
"You'll never be alone & will always find me by your side.",
"Nobody will take your position & you'll always be my priority.",
"I'll never cheat on you & no 3rd person will come between us.",
"I'll always respect your decision & will abide by it.",
"Your family & friends are my family & friends as simple as that.",
"I'll work hard to keep myself fit.",
"I'll never hide anything from you whatsoever.",
"I'll become the best version of myself & work hard where I lack.",
"My love or efforts will never go downhill.",
"I'll not shy away from apologizing for my mistakes.",
"You'll never have to prove how much you love me.",
"Your opinion will always matter to me the most.",
"I'll try to understand you more than anyone else.",
"Will make you & my parents proud by clearing the exam.",
"You'll never have to change yourself, you are already perfect.",
"I'll try my best to become your safe space."
];

let revealed = 0;

function typeWriter(el, text, i = 0) {
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(el, text, i + 1), 55);
  }
}

typeWriter(document.getElementById("landingText"), "Happy Promise Day ❤️");
setTimeout(() => {
  typeWriter(document.getElementById("landingSub"), "Tap a balloon to know mere dil ki baat...");
}, 1200);

function start() {
  document.querySelector(".landing").classList.add("hidden");
  const scene = document.getElementById("scene");
  scene.classList.remove("hidden");

  promises.forEach((p) => {
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random() * 80 + "%";
    b.style.top = Math.random() * 40 + 15 + "%";

    b.innerHTML = `
      <svg viewBox="0 0 512 512">
        <path fill="#ff4d6d"
        d="M256 464s-64-56-120-112C64 280 32 232 32 176 32 97 97 32 176 32c44 0 80 24 80 24s36-24 80-24c79 0 144 65 144 144 0 56-32 104-104 176-56 56-120 112-120 112z"/>
      </svg>
      <div class="thread"></div>
    `;

    b.onclick = () => showCard(p, b);
    scene.appendChild(b);
  });
}

function showCard(text, balloon) {
  balloon.remove();
  revealed++;

  const c = document.createElement("div");
  c.className = "card";
  c.innerHTML = `<div class="card-inner">${text}<br><br><button onclick="this.closest('.card').remove()">Close</button></div>`;
  document.body.appendChild(c);

  if (revealed === promises.length) {
    setTimeout(showFinal, 1200);
  }
}

function showFinal() {
  document.getElementById("final").classList.remove("hidden");
  typeWriter(
    document.getElementById("finalText"),
    "I may have missed some but I'll not forget to fulfill them. I'll always be yourssss. ❤️"
  );
}
