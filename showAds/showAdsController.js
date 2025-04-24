import { ads } from './showAdsModel.js'
import { buildAd } from './showAdsView.js';

export function showAdsController() {

    const container = document.querySelector(".ads-container")
    container.innerHTML = '';

    ads.forEach((ad) => {
        
        const adHtml = document.createElement("div");
        adHtml.innerHTML = buildAd(ad)
    
        container.appendChild(adHtml)
    })
}