module.exports = {
  activate() {
    const exec = event => {
      const tagSection = event.target;
      const hidden = tagSection.classList.contains('tags-hidden');
      const action = hidden ? showTags : hideTags;

      action(tagSection);
    };
    const showTags = tagSection => {
      const tags = Array.prototype.slice.call(
        document.getElementsByClassName('sidebar-menu-tag-list-item')
      );

      tags.forEach(tag => {
        tag.style.display = 'flex';
      });

      tagSection.classList.remove('tags-hidden');
    };
    const hideTags = tagSection => {
      const tags = Array.prototype.slice.call(
        document.getElementsByClassName('sidebar-menu-tag-list-item')
      );

      tags.forEach(tag => {
        tag.style.display = 'none';
      });

      tagSection.classList.add('tags-hidden');
    };

    const tagSections = Array.prototype.slice.call(
      document.getElementsByClassName('sidebar-menu-section-tags')
    );

    tagSections.forEach(element => {
      element.addEventListener('click', exec);
    });
  },

  deactivate() {}
};
