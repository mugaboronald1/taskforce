function transformString(str) {
    const len = str.length;  // Get the length of the string
  
    // Check if the length is divisible by 15
    if (len % 15 === 0) {
      // First, reverse the string
      str = str.split("").reverse().join("");
  
      // Then, replace each character with its ASCII code
      str = str
        .split("")                      // Split the reversed string into an array of characters
        .map((char) => char.charCodeAt(0)) // Map each character to its ASCII code
        .join(" ");                     // Join the ASCII codes with spaces
    } 
    // Check if the length is divisible by 3
    else if (len % 3 === 0) {
      // Reverse the string
      str = str.split("").reverse().join("");
    } 
    // Check if the length is divisible by 5
    else if (len % 5 === 0) {
      // Replace each character with its ASCII code
      str = str
        .split("")                      // Split the string into an array of characters
        .map((char) => char.charCodeAt(0)) // Map each character to its ASCII code
        .join(" ");                     // Join the ASCII codes with spaces
    }
  
    // Return the transformed string
    return str;
  }
  
  // Example usage
  console.log(transformString("Hamburger")); // Output: "regrubmaH"
  console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
  console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
  