// Workfront Finisher

// Navigate to https://livingspaces.my.workfront.com/myWork and run:

// Go to requests
document.querySelector('[data-name=list-myWork-workRequest]').click()


const finish = () => {
  document.querySelector('[data-name=list-myWork-workingOn]').click()
  // FINISH IT - use on 'Working On' tab
  let finishIt = setInterval(() => {

    document.querySelector("button.DoneButton").click();
    document
      .querySelector("li.pick-list-item.pickable.pos-r.ellipsed-text")
      .click();


  }, 500);
}

// Click requests (add them to your working on queue)
let workOnIt = setInterval(() => {
  if (document.querySelectorAll(".Button.work-on-it.primary.btn.btn-primary").length) {
    document
      .querySelector(".Button.work-on-it.primary.btn.btn-primary")
      .click();
  }
  else {
    finish()
    window.clearInterval(workOnIt)
  }
}, 500);