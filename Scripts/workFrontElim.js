// Workfront Finisher
setInterval(() => {
  document.querySelector("button.DoneButton").click();
  document
    .querySelector("li.pick-list-item.pickable.pos-r.ellipsed-text")
    .click();
}, 250);
