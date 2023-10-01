/* eslint-disable no-console */

export const basketJs = () => {
  const basketJs_el = document.querySelector('.button-basket');
  if (basketJs_el) {
    const basketRelative_el = document.querySelector('.menu-sale_basket-relative');
    //––––––––––––––––––––
    basketJs_el.addEventListener('click', function () {
      basketRelative_el.classList.toggle('hide');
    });
    document.addEventListener('click', function (event) {
      if (
        event.target !== basketJs_el &&
        !basketJs_el.contains(event.target) &&
        event.target !== basketRelative_el &&
        !basketRelative_el.contains(event.target)
      ) {
        basketRelative_el.classList.add('hide');
      }
    });
    //––––––––––––––––––––
  }
};
