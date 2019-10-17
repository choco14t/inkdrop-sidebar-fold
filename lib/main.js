'use babel';

import {actionFold} from './actionFold';

module.exports = {
  activate() {
    const tagSections = Array.prototype.slice.call(
      document.getElementsByClassName('sidebar-menu-section-tags')
    );

    tagSections.forEach(element => {
      element.addEventListener('click', actionFold, true);
    });

    const statusSections = Array.prototype.slice.call(
      document.getElementsByClassName('sidebar-menu-section-status')
    );

    statusSections.forEach(element => {
      element.addEventListener('click', actionFold, true);
    });

    const notebookSections = Array.prototype.slice.call(
      document.getElementsByClassName('sidebar-menu-section-notebooks')
    );

    notebookSections.forEach(element => {
      element.addEventListener('click', actionFold, true);
    });
  },

  deactivate() {}
};
