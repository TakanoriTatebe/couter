const updateCounterColor = ($counter) => {
  const currentCount = parseInt($counter.textContent);

  if (currentCount >= 10) {
    $counter.style.color = '#ff0000';
  } else if (currentCount < 0) {
    $counter.style.color = '#002aff';
  } else {
    $counter.style.color = '#000';
  }
};
