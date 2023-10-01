import { basketJs } from '$utils/basket';
import { loadMoreEvents } from '$utils/load-more-events';
import { pageAncors } from '$utils/page-ancors';

window.Webflow ||= [];
window.Webflow.push(() => {
  pageAncors();
  loadMoreEvents();
  basketJs();
});
