// get URL
var windowLocation = window.location.href

// todoist: scroll to bottom
if(windowLocation.includes("todoist")) {

  setTimeout(function() {
    console.log('Smooth browsing: Todoist -> scroll to bottom')
    window.scrollTo(0, document.body.scrollHeight)
  }, 2000);
}