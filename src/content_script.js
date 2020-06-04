browser.browserAction.setBadgeText({text: "Hello"});

// get URL
var windowLocation = window.location.href

//****************************************************************************************************************************************************
// page injections for different webiste
//****************************************************************************************************************************************************

// todoist: scroll to bottom
if(windowLocation.includes("todoist")) {

  setTimeout(function() {
    // set icon active


    // scroll down
    console.log('Smooth browsing: Todoist -> scroll to bottom')
    window.scrollTo(0, document.body.scrollHeight)
  }, 2000);
}