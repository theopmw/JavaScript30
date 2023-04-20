const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// Expand panel on click event
panels.forEach((panel) => panel.addEventListener('click', toggleOpen));

// Bring in text after panel transition
panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);
