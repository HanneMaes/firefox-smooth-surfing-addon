// get URL
var windowLocation = window.location.href

//****************************************************************************************************************************************************
// badge notification system
//****************************************************************************************************************************************************

function messageToBg(message) {
  browser.runtime.sendMessage({
    badgeText: message
  }).then(handleResponse, handleError);
  
  function handleResponse(message) {
  }
  
  function handleError() {
  }
}

//****************************************************************************************************************************************************
// page injections for different webiste
//****************************************************************************************************************************************************

// todoist: scroll to bottom
if(windowLocation.includes("todoist")) {

  messageToBg('▼')

  console.log('-----------------------------')
console.log('-----------------------------')
console.log('-----------------------------')
console.log('todoist')
console.log('-----------------------------')
console.log('-----------------------------')
console.log('-----------------------------')

  // scroll down when page is loaded
  setTimeout(function() {
    scrollToBottom()
  }, 2000);
} 

//****************************************************************************************************************************************************

// cables: fullscreen
if(windowLocation.includes("cables.gl/edit" || "designer.gravit.io")) {

  messageToBg('+')

  console.log('-----------------------------')
  console.log('-----------------------------')
  console.log('-----------------------------')
  console.log('+')
  console.log('-----------------------------')
  console.log('-----------------------------')
  console.log('-----------------------------')

  // scroll down when page is loade
  setTimeout(function() {
    fullscreen()
  }, 2000);
} 

//****************************************************************************************************************************************************

// we are not on a site with an action -> set the icon inactive
else {
  messageToBg('inactive')
}

//****************************************************************************************************************************************************
// helper functions
//****************************************************************************************************************************************************

function scrollToBottom() {
  console.log('Smooth browsing: Todoist -> scroll to bottom')
  window.scrollTo(0, document.body.scrollHeight)
}

//****************************************************************************************************************************************************

function fullscreen() {
  console.log('Smooth browsing: Todoist -> fullscreen')
  document.getElementsByTagName('html')[0].mozRequestFullScreen();
}

//****************************************************************************************************************************************************