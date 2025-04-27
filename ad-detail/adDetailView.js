export const buildAdDetailView = (ad) => {
    const date = new Date(ad.updatedAt)
    const content = ad.content;

    let adView = `
      <p>${ad.user.name} - ${date.toLocaleString()}</p>
      ${content.image ? `<img src="${content.image}" alt="Imagen de ${content.name}" style="max-width: 200px;">` : ''}
      <h2>${content.name}</h2>
      <p><strong>Descripción:</strong> ${content.description}</p>
      <p><strong>Precio:</strong> ${content.price} €</p>
      <p><strong>Tipo:</strong> ${content.type === 'venta' ? 'En venta' : 'Compra'}</p>
    `;
  
    return adView;
  }

  export const buildRemoveAdButton = () => {
    const removeButton = document.createElement("button");
    removeButton.textContent = 'Borrar anuncio';
  
    return removeButton;
  }