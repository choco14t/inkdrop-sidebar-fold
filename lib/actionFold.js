'use babel';

const sectionTarget = {
  'sidebar-menu-section-tags': 'sidebar-menu-tag-list-item',
  'sidebar-menu-section-status': 'sidebar-menu-status-list-item',
  'sidebar-menu-section-notebooks': 'sidebar-menu-book-list-item'
};

const excludes = ['add-notebook-button'];

export const actionFold = event => {
  if (shouldSkip(event.target)) {
    return;
  }

  const section = event.currentTarget;
  const classList = section.classList;

  const sectionType = Array.prototype.slice.call(classList).find(className => {
    return className.match(/sidebar-menu-section-/);
  });

  const filtered = Array.prototype.slice
    .call(event.currentTarget.parentElement.classList)
    .includes('sidebar-book-filter-menu');

  const hidden = classList.contains('sections-hidden');
  const action = hidden ? showSectionItems : hideSectionItems;
  const selector = filtered
    ? `.sidebar-book-filter-menu .${sectionTarget[sectionType]}`
    : `.sidebar-menu > .${sectionTarget[sectionType]}`;

  action(section, selector);
};

const showSectionItems = (section, selector) => {
  const sectionItems = Array.prototype.slice.call(
    document.querySelectorAll(selector)
  );

  sectionItems.forEach(sectionItem => {
    sectionItem.style.display = 'flex';
  });

  section.classList.remove('sections-hidden');
};

const hideSectionItems = (section, selector) => {
  const sectionItems = Array.prototype.slice.call(
    document.querySelectorAll(selector)
  );

  sectionItems.forEach(sectionItem => {
    sectionItem.style.display = 'none';
  });

  section.classList.add('sections-hidden');
};

const shouldSkip = target => {
  return (
    Array.prototype.slice.call(target.classList).find(className => {
      return excludes.includes(className);
    }) !== undefined
  );
};
