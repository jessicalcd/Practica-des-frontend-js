import { createAd } from "./createAdModel.js";
 
 export const createAdController = (form) => {
   form.addEventListener('submit', async (event) => {
    event.preventDefault();
 
    const nameElement = form.querySelector('#name');
    const name = nameElement.value;
    const descriptionElement = form.querySelector('#description');
    const description = descriptionElement.value;
    const priceElement = form.querySelector('#price');
    const price = parseFloat(priceElement.value);
    const typeElement = form.querySelector('#type');
    const type = typeElement.value;
    const imageElement = form.querySelector('#image');
    const image = imageElement.value;

    const adData = { name, description, price, type, image };

    if (image.trim() !== '') {
     adData.image = image;
    }

    try {
      await createAd(adData)
      setTimeout(() => {
        window.location = '/';
      }, 2000)
    } catch (error) {
      alert(error.message)
    }
  })
}


  
   