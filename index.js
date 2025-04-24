import { showAdsController } from "./showAds/showAdsController.js"

document.addEventListener("DOMContentLoaded", () => {
    const showAdsButton = document.querySelector("button");

    if(showAdsButton) {
        showAdsButton.addEventListener("click", showAdsController)
    }
})



