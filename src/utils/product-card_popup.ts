/* eslint-disable no-console */

export const prdocutCardPopup = () => {
  const prdocutCardPopup_el = document.querySelectorAll('.card-click-area');
  if (prdocutCardPopup_el.length) {
    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
      'cmsload',
      (listInstances) => {
        // console.log('cmsload Successfully loaded!');
        listInstances.forEach((list) => {
          list.on('renderitems', (renderedItems) => {
            // console.log(renderedItems);
            cardClickFunction();
          });
        });
      },
    ]);
    function cardClickFunction() {
      const allProductCards = document.querySelectorAll('.card-click-area');
      const allProductCards_closeButtons = document.querySelectorAll('.popup_close-button');
      const allProductPopupsBg = document.querySelectorAll('.product-popup_overlay');
      allProductCards.forEach((card) => {
        card.addEventListener('click', function () {
          const currentPopup = card.parentElement.querySelector('.product-popup');
          currentPopup.classList.remove('hide');
        });
      });
      allProductCards_closeButtons.forEach((closeButton) => {
        closeButton.addEventListener('click', function () {
          const allProductPopups = document.querySelectorAll('.product-popup');
          allProductPopups.forEach((productPopup) => {
            productPopup.classList.add('hide');
          });
        });
      });
      allProductPopupsBg.forEach((bg) => {
        bg.addEventListener('click', function () {
          const allProductPopups = document.querySelectorAll('.product-popup');
          allProductPopups.forEach((productPopup) => {
            productPopup.classList.add('hide');
          });
        });
      });
    }
    cardClickFunction();
  }
};
