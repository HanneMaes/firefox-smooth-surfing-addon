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
  setTimeout(function() {
    
    // scroll to bottom
    console.log('Smooth browsing: Todoist -> scroll to bottom')
    window.scrollTo(0, document.body.scrollHeight)

  }, 2000);
} 

//****************************************************************************************************************************************************

// cables: fullscreen
if(windowLocation.includes("cables.gl/edit" || "designer.gravit.io")) {

  messageToBg('+')
  setTimeout(function() {
    
    // fullscreen
    console.log('Smooth browsing: Todoist -> fullscreen')
    document.getElementsByTagName('html')[0].mozRequestFullScreen();

  }, 2000);
} 

//****************************************************************************************************************************************************

// we are not on a site with an action -> set the icon inactive
else {
  messageToBg('inactive')
}