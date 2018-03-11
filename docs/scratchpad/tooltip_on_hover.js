export const renderTooltipOnHover = () => {
  const tooltipHover = document.querySelector('.skill-tooltip');

  function renderOnHover(e) {
    console.log("hello");
    let x = e.clientX;
    let y = e.clientY;

    tooltipHover.style.top = (y + 20) + 'px';
    tooltipHover.style.left = (x + 20) + 'px';
  }

  document.addEventListener('mousemove', renderOnHover);
};