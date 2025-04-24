export const buildAd = (ad) => {
    return `
            <p>${ad.name}</p>
            <p>${ad.description}</p>
            <p>${ad.price}</p>
            <p>${ad.type}</p>
        `
    
}

export const buildNoAdsAdvice = () => {
    return '<h3>Lo siento, no hay anuncios disponibles!</h3>'
}