export const buildAd = (ad) => {
    return `
            <p>${ad.name}</p>
            <p>${ad.description}</p>
            <p>${ad.price}</p>
            <p>${ad.type}</p>
        `
    
}