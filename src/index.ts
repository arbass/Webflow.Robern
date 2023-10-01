import { basketJs } from '$utils/basket';
import { basketLocalStorage } from '$utils/basket_local-storage';
import { dimensionsFunction } from '$utils/dimensions';
import { loadMoreEvents } from '$utils/load-more-events';
import { pageAncors } from '$utils/page-ancors';
import { prdocutCardPopup } from '$utils/product-card_popup';

window.Webflow ||= [];
window.Webflow.push(() => {
  pageAncors();
  loadMoreEvents();
  basketJs();
  prdocutCardPopup();
  dimensionsFunction();
  basketLocalStorage();
});
