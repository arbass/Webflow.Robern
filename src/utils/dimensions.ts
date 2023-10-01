/* eslint-disable no-console */

export const dimensionsFunction = () => {
  const dimensionsFunction_el = document.querySelectorAll('.cl_category-pagination-load-more');
  if (dimensionsFunction_el.length) {
    function dimensionsFunctionStart() {
      const allDemensionItems = document.querySelectorAll('[product-demesion]');
      allDemensionItems.forEach((el) => {
        const currentSizeElements = el.querySelectorAll('.cl-i_category-size-wrapper-grid-item');
        const currentValue_allDemensionItems = el.getAttribute('product-demesion');
        const dimensionsArray = currentValue_allDemensionItems.split('x');
        dimensionsArray.forEach((size, id) => {
          currentSizeElements[id].classList.remove('hide');
          const currentSizeElementsTexts = currentSizeElements[id].querySelectorAll(
            '.cl-i_category-size-wrapper-grid-item-text'
          );
          currentSizeElementsTexts[1].textContent = size;
        });
      });
    }

    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
      'cmsload',
      (listInstances) => {
        // console.log('cmsload Successfully loaded!');
        listInstances.forEach((list) => {
          list.on('renderitems', (renderedItems) => {
            dimensionsFunctionStart();
          });
        });
      },
    ]);

    dimensionsFunctionStart();
  }
};
