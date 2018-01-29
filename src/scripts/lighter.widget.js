function lighter(cssSelectorOfElement, interval = 2000) {
  console.log(interval);
  const CHANGE_LIGHT_INTERVAL = interval;

  const parentContainer = document.querySelector(cssSelectorOfElement);
  const lights = Array.from(parentContainer.querySelectorAll('.lights'));
  const btnToggle = parentContainer.querySelector('.btn-toggle');

  let isEnabled = false;
  let activeLightIndex = 0;
  let intervalId = 0;

  function switchOff() {
    lights.forEach(function (light) {
      light.classList.remove('active');
    });
  }

  function switchOn() {
    const activeLight = lights[activeLightIndex];
    activeLight.classList.add('active');
  }

  function switchNext() {
    if (activeLightIndex + 1 < lights.length) {
      activeLightIndex++;
    } else {
      activeLightIndex = 0;
    }
    switchOff();
    switchOn();
  }

  function startInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(switchNext, CHANGE_LIGHT_INTERVAL);
  }

  function startLighter () {
      switchOn();
      startInterval();
  }

  function stopLighter() {
    clearInterval(intervalId);
    activeLightIndex = 0;
    switchOff();
  }

  function init() {
    lights.forEach(
      function (light, i) {
        light.addEventListener('click', function () {
          if (isEnabled) {
            activeLightIndex = i;
            switchOff();
            switchOn();
          }
        });
      }
    );

    parentContainer.addEventListener('mouseenter', function () {
      console.log('Mouse eneter');
      clearInterval(intervalId);
    });

    parentContainer.addEventListener('mouseleave', function () {
      console.log('Mouse leave');
      if(isEnabled) {
        startInterval();
      }
    });

    btnToggle.addEventListener('click', function () {
      isEnabled = !isEnabled;
      console.log(isEnabled);
      if (isEnabled) {
        startLighter();
      } else {
        stopLighter();
      }
    });
  }

  init();
}

export default lighter;


