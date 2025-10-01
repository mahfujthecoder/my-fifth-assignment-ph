function getElement (id) {
    const element = document.getElementById(id);
    return element;
}


// heart icon count
getElement('service-container').addEventListener('click', function(e){
    if(e.target.className.includes('heart-icon')){
       const heartCount = parseInt(getElement('heart-count').innerText)
        const currentheart = Number(heartCount) + 1;
        getElement('heart-count').innerText = currentheart;

    }
})
    





// call-btn clicked
getElement('service-container').addEventListener('click',function(e){
   if(e.target.className.includes('cart-btn')){
     const cartButton = e.target;
     const cartTitle = cartButton.parentNode.parentNode.children[1].children[0].innerText;
    //  console.log(cartTitle);

    const cartNumber = cartButton.parentNode.parentNode.children[2].children[0].innerText;
    // console.log(cartNumber)
     
      const callCoin = getElement('call-coin').innerText;
//    console.log(callCoin)
 

if(callCoin >=20) {
    alert(`📞 Calling ${cartTitle} ${cartNumber}...`);
}
if ( callCoin < 20) {
    alert('❌ You don’t have enough coins. It takes at least 20 coins to make a call.')
    return;
}

 const currentCoin = Number(callCoin) - 20;
  getElement('call-coin').innerText = currentCoin;


  
      const now = new Date();
   const currentTimeString = now.toLocaleTimeString();

    const cartContainer = getElement('cart-container');

    const newCart = document.createElement('div');
    newCart.innerHTML = `
    <div class="bg-[#fafafa] mt-3 p-[10px] flex justify-between">
          <div>
          <h2 class="font-semibold">${cartTitle}</h2>
          <p class="text-[#5c5c5c]">${cartNumber}</p>
          </div>
          <p>${currentTimeString}</p>
        </div>
    `;
    cartContainer.append(newCart);
    
   }
   
})





// clear btn clicked
getElement('btn-clear').addEventListener('click', function(){

    const cartContainer = getElement('cart-container');
    cartContainer.innerHTML = "";
})




// copy btn clicked
getElement('service-container').addEventListener('click', function(e){
    if(e.target.className.includes('copy-btn')) {
        const copyCount = parseInt(getElement('copy-count').innerText);
        const currentCopyCount = copyCount + 1;
        getElement('copy-count').innerText = currentCopyCount;
    }


   
        
})