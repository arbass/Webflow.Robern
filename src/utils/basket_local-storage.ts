/* eslint-disable no-console */

export const basketLocalStorage = () => {
  const basketLocalStorage_el = document.querySelector('.button-basket');
  if (basketLocalStorage_el) {
    function basketLocalStorageFunction() {
      const all_ListItems = document.querySelectorAll('.cl-i_category');
      console.log(all_ListItems);
    }

    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
      'cmsload',
      (listInstances) => {
        // console.log('cmsload Successfully loaded!');
        listInstances.forEach((list) => {
          list.on('renderitems', (renderedItems) => {
            // console.log(renderedItems);
            basketLocalStorageFunction();
          });
        });
      },
    ]);

    basketLocalStorageFunction();
  }
};
