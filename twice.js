(() => {
  const $counter = document.getElementById('js-counter');

  const clickHandler = () => {
    let currentCount = parseInt($counter.textContent)
    currentCount = currentCount * 2;
    $counter.textContent = currentCount;
    updateCounterColor($counter);
  }

  document.getElementById('js-twice-button').addEventListener('click', clickHandler)
})();
