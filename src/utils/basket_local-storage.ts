/* eslint-disable no-console */

export const basketLocalStorage = () => {
  const basketLocalStorage_el = document.querySelector('.button-basket');
  if (basketLocalStorage_el) {
    function updateCountInBasket(stringValue) {
      const allBasketIcons = document.querySelectorAll('.button-basket_svg');
      document.querySelector('#button-basket_count').textContent = stringValue;
      document.querySelector('#button-basket_count-2').textContent = stringValue;
      if (stringValue == '1') {
        document.querySelector('#button-basket_count-unit').textContent = 'item';
        document.querySelector('#button-basket_count-unit-2').textContent = 'item';
      } else {
        document.querySelector('#button-basket_count-unit').textContent = 'items';
        document.querySelector('#button-basket_count-unit-2').textContent = 'items';
      }
      if (stringValue == '0') {
        document.querySelector('.menu-sale_basket-body-top-active').classList.add('hide');
        document.querySelector('.menu-sale_basket-body-top-empty').classList.remove('hide');
        document.querySelector('.menu-sale_basket-body-bottom').classList.add('hide');
        document.querySelector('.menu-sale_basket-body-cta').classList.add('hide');
        allBasketIcons.forEach((el) => {
          el.classList.remove('is-active');
        });
      } else {
        document.querySelector('.menu-sale_basket-body-top-active').classList.remove('hide');
        document.querySelector('.menu-sale_basket-body-top-empty').classList.add('hide');
        document.querySelector('.menu-sale_basket-body-bottom').classList.remove('hide');
        document.querySelector('.menu-sale_basket-body-cta').classList.remove('hide');
        allBasketIcons.forEach((el) => {
          el.classList.add('is-active');
        });
      }
    }

    window.addEventListener('storage', function (event) {
      basketLocalStorageFunction();
    });
    function startCardsChecking() {
      const allCardButtons = document.querySelectorAll('[basket-current-item-slug]');
      allCardButtons.forEach((button) => {
        checkCurrentCardProductInBasket(button);
      });
    }
    function checkCurrentCardProductInBasket(button) {
      const currentAddToCartButtonSlug = button.getAttribute('basket-current-item-slug');

      if (button.classList.contains('is-in-cart')) {
        const itemNameToDelete = currentAddToCartButtonSlug;
        const cartData = JSON.parse(localStorage.getItem('cart'));

        if (cartData && cartData.items && cartData.items.length > 0) {
          cartData.items = cartData.items.filter((item) => item.title !== itemNameToDelete);
          // console.log('filter triggered');

          localStorage.setItem('cart', JSON.stringify(cartData));
        }

        updateCountInBasket(cartData.items.length);
        button.classList.remove('is-in-cart');
        button.textContent = 'Add to cart';
      } else {
        const cartData = JSON.parse(localStorage.getItem('cart'));
        const newItem = {
          title: currentAddToCartButtonSlug,
          currentProductCount: 1,
        };

        if (!cartData.items) {
          cartData.items = [];
        } else {
          // console.log('we already have an array');
        }
        cartData.items.push(newItem);
        localStorage.setItem('cart', JSON.stringify(cartData));
        updateCountInBasket(cartData.items.length);

        button.classList.add('is-in-cart');
        button.textContent = 'Remove from cart';
      }
    }
    function basketLocalStorageFunction() {
      if (!localStorage.getItem('cart')) {
        const cart = {
          itemCount: 0,
          items: [],
        };
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const { itemCount } = cart;

        updateCountInBasket(itemCount);
      }

      const all_ListItems = document.querySelectorAll('.cl-i_category');
      all_ListItems.forEach((item) => {
        const currentAddToCartButton = item.querySelector('[basket-current-item-slug]');
        const currentBasketDiv = item.querySelector('.menu-sale_basket-item');

        currentAddToCartButton.addEventListener('click', function () {
          checkCurrentCardProductInBasket(currentAddToCartButton);
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
            // console.log(renderedItems);
            basketLocalStorageFunction();
          });
        });
      },
    ]);

    basketLocalStorageFunction();
  }
};
