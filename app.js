const loadItems = () => {
  const container = document.querySelector('.container');
  const boxLeft = document.querySelector('.box-left');
  const boxRight = document.querySelector('.box-right');

  const addHoverLeft = () => {
    container.classList.add('hover-left');
  };

  const removeHoverLeft = () => {
    container.classList.remove('hover-left');
  };

  const addHoverRight = () => {
    container.classList.add('hover-right');
  };

  const removeHoverRight = () => {
    container.classList.remove('hover-right');
  };

  boxLeft.addEventListener('mouseenter', addHoverLeft);
  boxRight.addEventListener('mouseenter', addHoverRight);
  boxLeft.addEventListener('mouseleave', removeHoverLeft);
  boxRight.addEventListener('mouseleave', removeHoverRight);
};

window.addEventListener('load', loadItems);
