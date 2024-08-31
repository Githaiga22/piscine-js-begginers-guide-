function vowelDots(str) {
    let vowels = "aeiou";
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            result += str[i] + ".";
            } else {
                result += str[i];
                }
                }
                return result;
}
console.log(vowelDots("Hello World")); // "He.llo Wo.rld"``
