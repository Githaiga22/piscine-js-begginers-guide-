function vowelDots(str) {
    let vowels = /[aeiouAEIOU]/g;
    let result = str.replace(vowels, "$&.");
  return result;
}
console.log(vowelDots("Allan")); 
