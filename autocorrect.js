// Autocorrect function
export function autocorrectURL(input) {
    input = input.toLowerCase(); // Convert input to lowercase for case-insensitive matching
    if (autocorrectURLs.hasOwnProperty(input)) {
        return autocorrectURLs[input];
    } else {
        return null; // Return null if no autocorrection found
    }
}
