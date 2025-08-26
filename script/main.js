function getId(id){
    const element = document.getElementById(id);
    return element
}

getId('card-container').addEventListener('click', (e) => {
    if(e.target.classList.contains('hart-icon')){
        const hart = getId("hart-count")
        const hartCount = Number(hart.innerText)
        const setHart = hartCount + 1;
        hart.innerText = setHart;
    }
    // calling section
    if(e.target.classList.contains('call-btn')){
        const callButton = e.target;
        const coins = getId('coin')
        let validCoin = Number(coins.innerText)

        if(validCoin < 20){
            alert("❌ You don't have enough coins")
            return
        } else{
            validCoin -= 20;
            coins.innerText = validCoin;

            const cardTitle = callButton.parentNode.parentNode.children[1].innerText;
            

            const cardNumber = callButton.parentNode.parentNode.children[4].innerText
            console.log(cardNumber);
        }

        

    }
    if(e.target.classList.contains('copy-btn')){
        console.log("copy button clicked");
    }
})