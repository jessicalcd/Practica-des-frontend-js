export const buildAd = (ad) => {
    return `
        <div class="ad">
        ${ad.image ? `<img src="${ad.image}" alt="Imagen de ${ad.name}" style="max-width: 200px;">` : ''}
        <h2>${ad.name}</h2>
        <p><strong>Descripción:</strong> ${ad.description}</p>
        <p><strong>Precio:</strong> ${ad.price} €</p>
        <p><strong>Tipo:</strong> ${ad.type === 'venta' ? 'En venta' : 'Buscando'}</p>
        </div>
    `;
};


export const buildNoAdsAdvice = () => {
    return '<h3>Lo siento, no hay anuncios disponibles!</h3>'
}