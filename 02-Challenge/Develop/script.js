// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () { 
  var timeBlocks = document.querySelectorAll('.time-block');
  var saveButtons = document.querySelectorAll('.saveBtn');
  
  saveButtons.forEach(saveButton => {
    saveButton.addEventListener('click', event => {
      var timeBlock = event.target.closest('.time-block');
      var id = timeBlock.id;
      var textarea = timeBlock.querySelector('.description');
  
      localStorage.setItem(id, textarea.value);
    });
  });
  
  timeBlocks = document.querySelectorAll('.time-block');
  console.log(timeBlocks);
 saveButtons = document.querySelectorAll('.saveBtn');
var currentHour = new Date().getHours();
console.log(currentHour);
timeBlocks.forEach(timeBlock => {
  var id = timeBlock.id;
  var textarea = timeBlock.querySelector('.description');

  var userInput = localStorage.getItem(id);

  if (userInput) {
    textarea.value = userInput;
  }
});

saveButtons.forEach(saveButton => {
  saveButton.addEventListener('click', event => {
    var timeBlock = event.target.closest('.time-block');
    var id = timeBlock.id;
    var textarea = timeBlock.querySelector('.description');

    if (id < currentHour) {
      timeBlock.classList.add('past');
    } else if (id === currentHour) {
      timeBlock.classList.add('present');
    } else {
      timeBlock.classList.add('future');
    }

    localStorage.setItem(id, textarea.value);
  });
});

  //
  // TODO: Add code to display the current date in the header of the page.
   timeBlocks = document.querySelectorAll('.time-block');
 saveButtons = document.querySelectorAll('.saveBtn');
 currentHour = new Date().getHours();
var header = document.querySelector('h1');

var currentDate = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
header.textContent = currentDate.toLocaleDateString('en-US', options);

timeBlocks.forEach(timeBlock => {
  
});

saveButtons.forEach(saveButton => {
  
});

});

