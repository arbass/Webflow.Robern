/* eslint-disable no-console */

export const loadMoreEvents = () => {
  const loadMoreEvents_el = document.querySelectorAll('.cl_category-pagination-load-more');
  if (loadMoreEvents_el.length) {
    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
      'cmsload',
      (listInstances) => {
        // console.log('cmsload Successfully loaded!');
        listInstances.forEach((list) => {
          list.on('renderitems', (renderedItems) => {
            // console.log(renderedItems);
          });
        });
      },
    ]);
  }
};
