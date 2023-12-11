function solve() {
   const addButtons = Array.from(document.querySelectorAll('button.add-product'));
   
   const checkOutButton = document.querySelector('button.checkout');
   const textArea = document.querySelector('textarea');
   let boughtProducts = [];
   let totalPrice = 0;

   addButtons.forEach(btn => {
      btn.addEventListener('click', addToCart);
   })


   function addToCart(e){
      const currentProduct = e.currentTarget.parentNode.parentNode;
      const productTitle = currentProduct.querySelector('.product-title').textContent;
      const productPrice = currentProduct.querySelector('.product-line-price').textContent;     
      if (!boughtProducts.includes(productTitle)){
         boughtProducts.push(productTitle)
      }
      totalPrice += Number(productPrice);
      textArea.value += `Added ${productTitle} for ${productPrice} to the cart.\n`;
   }

   checkOutButton.addEventListener('click', checkout);

   function checkout (e){
      textArea.value += `You bought ${boughtProducts.join(', ')}for ${totalPrice.toFixed(2)}`;

      addButtons.forEach(btn => {
         btn.removeEventListener('click', addToCart);
      })

   }

   

}