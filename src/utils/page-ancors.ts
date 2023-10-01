/* eslint-disable no-console */

export const pageAncors = () => {
  const pageAncors_el = document.querySelectorAll('.section_category');
  if (pageAncors_el.length) {
    pageAncors_el.forEach((sectionCategory) => {
      const firstItemInSection = sectionCategory.querySelector('[current-category]');
      if (firstItemInSection) {
        const currentCategoryName = firstItemInSection.getAttribute('current-category');
        const currentAncDot = sectionCategory.querySelector('.section_category-anc');
        currentAncDot.setAttribute('id', currentCategoryName);
      }
    });
  }
};
