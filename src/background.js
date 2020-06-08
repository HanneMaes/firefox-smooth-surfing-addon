// style the badge
browser.browserAction.setBadgeBackgroundColor({color: "black"});
browser.browserAction.setBadgeTextColor({color: "white"});

//****************************************************************************************************************************************************

// wait for messages
browser.runtime.onMessage.addListener(
  (data, sender) => {
    if (data.badgeText == "inactive") {

      // set icon inactive
      browser.browserAction.setIcon({path: "icons/icon-inactive.png"});

      // empty badge text
      browser.browserAction.setBadgeText({
        text: ''
      });
      // return Promise.resolve({
      //   message: 'done'
      // });

    } else {

      // set icon active
      browser.browserAction.setIcon({path: "icons/icon.png"});

      browser.browserAction.setBadgeText({
        text: data.badgeText
      });
      // return Promise.resolve({
      //   message: 'done'
      // });

    }
  }
);

//****************************************************************************************************************************************************