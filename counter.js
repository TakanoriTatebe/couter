(() => {
  const $counter = document.getElementById('js-counter')

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent)
    if ($targetButton.textContent === "+") {
      $counter.textContent = currentCount + 1
    } else if ($targetButton.textContent === "+5") {
      $counter.textContent = currentCount + 5
    } else if ($targetButton.textContent === "-5") {
      $counter.textContent = currentCount - 5
    } else {
      $counter.textContent = currentCount - 1
    }

    if (parseInt($counter.textContent) >= 10) {
      $counter.style.color = '#ff0000';
    } else if (parseInt($counter.textContent) < 0) {
      $counter.style.color = '#002aff';
    } else {
      $counter.style.color = '#000';
    }
  }

  for (let index = 0; index < document.getElementsByClassName('js-button').length; index++) {
    document.getElementsByClassName('js-button')[index].addEventListener('click', (e) => {
      clickHandler(e)
    })
  }
})();
