export const handleAboutModal = () => {
  const aboutToggle = document.getElementById('about-toggle');
  const aboutClose = document.querySelector('.about__close');

  const aboutGroup = document.querySelector('.about-group');

  const modal = document.querySelector('.modal');
  const modalScreen = document.querySelector('.modal-screen');


  function hideAboutModal(e) {
    e.stopPropagation();
    modal.classList.add('hidden');
    modalScreen.classList.remove('active');
  }

  function showAboutModal(e) {
    e.stopPropagation();

    setTimeout(() => {
      modalScreen.classList.add('active');
    }, 100);

    modal.classList.remove('hidden');
  }

  function showAboutGroup(e) {
    setTimeout(() => {
      aboutGroup.classList.add('active');
    }, 100);
  }

  function hideAboutGroup(e) {
    aboutGroup.classList.remove('active');
  }

  modalScreen.addEventListener('click', hideAboutModal);
  modalScreen.addEventListener('click', hideAboutGroup);

  aboutClose.addEventListener('click', hideAboutModal);
  aboutClose.addEventListener('click', hideAboutGroup);

  aboutToggle.addEventListener('click', showAboutModal);
  aboutToggle.addEventListener('click', showAboutGroup);
};