(() => {
  const $counter = document.getElementById('js-counter');

  const clickHandler = () => {
    let currentCount = parseInt($counter.textContent)
    currentCount = currentCount * 2;
    $counter.textContent = currentCount;
    if (parseInt($counter.textContent) >= 10) {
      $counter.style.color = '#ff0000';
    } else if (parseInt($counter.textContent) < 0) {
      $counter.style.color = '#002aff';
    } else {
      $counter.style.color = '#000';
    }
  }

  document.getElementById('js-twice-button').addEventListener('click', clickHandler)
})();
