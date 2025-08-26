function getId(id) {
  const element = document.getElementById(id);
  return element;
}

getId("card-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("hart-icon")) {
    const hart = getId("hart-count");
    const hartCount = Number(hart.innerText);
    const setHart = hartCount + 1;
    hart.innerText = setHart;
  }
  // calling section
  if (e.target.classList.contains("call-btn")) {
    const callButton = e.target;
    const coins = getId("coin");
    let validCoin = Number(coins.innerText);

    if (validCoin < 20) {
      alert("❌ You don't have enough coins");
      return;
    } else {
      validCoin -= 20;
      coins.innerText = validCoin;

      const asideContent = getId("aside-container");
      const cardTitle = callButton.parentNode.parentNode.children[1].innerText;
      const cardNumber = callButton.parentNode.parentNode.children[4].innerText;
      const date = new Date().toLocaleTimeString();

      alert(`${cardTitle} ${cardNumber}...`);

      const div = document.createElement("div");
      div.innerHTML = `
            <div class="flex justify-between mt-10 items-center bg-[#FAFAFA] p-5 rounded-lg gap-2">
                    <div class="flex-2">
                    <h2 class="font-inter font-semibold text-lg">${cardTitle}</h2>
                    <p class="font-hind text-lg text-[#5C5C5C]">${cardNumber}</p>
                </div>
                <p class="font-hind text-lg">${date}</p>
                </div>
            `;
      asideContent.appendChild(div);
    }
  }
  if (e.target.classList.contains("copy-btn")) {
    console.log("copy button clicked");
  }
});

// aside clear btn
getId("clear-btn").addEventListener('click', () => {
    const asideContent = getId("aside-container");
    asideContent.innerHTML = '';
})

