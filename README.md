<img src="src/icons/icon.png" width="100px" height="100px"><br>

# Smooth Surfing <small style="color:lightgrey">Firefox addon</small>
Small website injections that make my browsing experience smoother.<br><br>
<img src="screenshot.png" width="441px" height="393px">

# Testing
1. about:debugging
2. This Firefox
3. Load temporary Add-on
3. Select: background-script.js

# Packaging
Build: `cd src && web-ext build`
  - Installation: `npm install --global web-ext`
  - Docs: https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/

# If fullscreen is not working
1. Go to `about:config` and `set full-screen-api.allow-trusted-requests-only = false`

