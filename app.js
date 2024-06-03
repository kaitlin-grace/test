function spin() {
  const wheel = document.getElementById('wheel');
  const randomDegree = Math.floor(Math.random() * 360);
  const totalDegrees = 1440 + randomDegree; // Spin at least 4 times
  wheel.style.transform = `rotate(${totalDegrees}deg)`;

  wheel.addEventListener('transitionend', () => {
    const finalDegree = totalDegrees % 360;
    let selectedNumber;
    if (finalDegree >= 0 && finalDegree < 90) {
      selectedNumber = 1;
    } else if (finalDegree >= 90 && finalDegree < 180) {
      selectedNumber = 2;
    } else if (finalDegree >= 180 && finalDegree < 270) {
      selectedNumber = 3;
    } else {
      selectedNumber = 4;
    }
    document.getElementById('result').innerText = `Selected Number: ${selectedNumber}`;
  }, { once: true });
}
