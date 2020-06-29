// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    let lowercaseStr = str.toLowerCase().split(' ');
    let newStr = lowercaseStr.map(elem => {
      return elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase());
    })
    return newStr.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));
  