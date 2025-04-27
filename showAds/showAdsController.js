import {getAds} from "./showAdsModel.js"
import { buildAd, buildNoAdsAdvice } from './showAdsView.js';

export async function showAdsController(container) {
    
    try {
        const event = new CustomEvent("load-ads-started")
        container.dispatchEvent(event)
        const ads = await getAds();
        showAds(ads, container)
    } catch (error) {
        const event = new CustomEvent("load-ads-error", {
            detail:error.message
        })
        container.dispatchEvent(event)
    } finally {
        const event = new CustomEvent("load-ads-finished")
        container.dispatchEvent(event)
    }
    
}

function showAds(ads, container) {
    

    container.innerHTML = '';
    
    if (ads.length === 0) {
        container.innerHTML = buildNoAdsAdvice()
    }
    

    ads.forEach((ad) => {
        
        const adHtml = document.createElement("a");
        adHtml.setAttribute("href", `./ad-detail.html?id=${ad.id}`)
        adHtml.innerHTML = buildAd(ad)
    
        container.appendChild(adHtml)
    })
}