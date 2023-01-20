// // Function to show current date and time
(function datetime() {
  var clockElement = document.getElementById('datetime');
  function clock() {
    clockElement.textContent = new Date().toString();
  }
  setInterval(clock, 1000);
})();
