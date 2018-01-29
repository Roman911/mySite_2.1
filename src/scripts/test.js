function bulb (selector) {
  const rootElement = document.querySelector(selector);
  const button = rootElement.querySelector('.lighter__control');
  const bulb = rootElement.querySelector('.lighter__bulb');

  console.log(button);
  console.log(bulb);

  function toggleLighter () {
    console.log('Toggle');
    bulb.classList.toggle('active');
  }

  button.addEventListener('click', toggleLighter);
}

export default bulb;