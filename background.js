// Define a list of URLs for autocorrection
const autocorrectURLs = {
  "googgle": "https://www.google.com",
  "yutube": "https://www.youtube.com",
  // Add more URLs for autocorrection as needed
};

// Import the autocorrectURL function from another file
import { autocorrectURL } from './autocorrect.js';

// Omnibox event listener for input changes
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  // Check if input matches any autocorrectable URL
  const correctedURL = autocorrectURL(text);
  if (correctedURL) {
      // If autocorrection found, suggest the corrected URL
      suggest([{
          content: correctedURL,
          description: "Did you mean: " + correctedURL
      }]);
  } else {
      // If no autocorrection found, provide a default suggestion
      suggest([{
          content: "https://www.google.com",
          description: "Search Google"
      }]);
  }
});

// Omnibox event listener for input submission
chrome.omnibox.onInputEntered.addListener(function(text, disposition) {
  // Open the selected URL in a new tab
  chrome.tabs.create({ url: text });
});
