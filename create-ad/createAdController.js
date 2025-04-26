import { createAd } from "./createAdModel.js";
 
 export const createAdController = (form) => {
   form.addEventListener('submit', async (event) => {
     event.preventDefault();
 
     const name = form.querySelector('#name').value;
     const description = form.querySelector('#description').value;
     const price = parseFloat(form.querySelector('#price').value);
     const type = form.querySelector('#type').value;
     const image = form.querySelector('#image').value;
 
     const adData = { name, description, price, type };

     if (image.trim() !== '') {
      adData.image = image;

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