const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"');

let lastChecked;

function handleCheck(e) {
  // Check if user has shift key down
  // AND check if the are checking the checkbox (and not UNchecking it)
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // Loop over checkboxes
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck)
);
