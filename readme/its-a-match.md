## What is a Regular Expression (RegEx)?

A regular expression is a sequence of characters that defines a search pattern. We use RegEx to match or find patterns in text. In JavaScript, we create a RegEx pattern using /pattern/ syntax.
Understanding the Task

You need to create four different regular expressions that match the word "hi" in a string under different conditions:

- normal: Matches the string "hi" anywhere in the text.
 -  begin: Matches "hi" only if it appears at the beginning of the text.
-  end: Matches "hi" only if it appears at the end of the text.
-  beginEnd: Matches "hi" only if it is the entire text.

### Step-by-Step Explanation
1. Matching "hi" Anywhere in the Text (normal)

RegEx: /hi/

   ### Explanation:
 This pattern will find the string "hi" anywhere within a larger string. For example, if you have the string "oh hi there!", this pattern will find the "hi" part.
  The pattern /hi/ doesn't care where "hi" appears; it just checks if "hi" exists somewhere in the string.

    Example:
```bash
    const normal = /hi/;
    console.log(normal.test("oh hi there!"));  // true (matches "hi")
    console.log(normal.test("hello"));         // false (no match)
```
2. Matching "hi" Only at the Beginning of the Text (begin)

RegEx: /^hi/

Explanation:
    The ^ symbol is an "anchor" that ensures the pattern matches only at the start of the string. This means that "hi" must appear right at the beginning of the string.
   For example, "hi there!" would match, but "oh hi there!" would not match because "hi" is not at the start.

    Example:
```bash
    const begin = /^hi/;
    console.log(begin.test("hi there!"));      // true (matches "hi" at the start)
    console.log(begin.test("oh hi there!"));   // false (doesn't match "hi" at the start)
```
3. Matching "hi" Only at the End of the Text (end)

RegEx: /hi$/

    Explanation:
        The $ symbol is an anchor that ensures the pattern matches only at the end of the string. This means "hi" must appear at the very end.
        For example, "say hi" would match, but "say hi there!" would not match because "hi" is not at the end.

    Example:
```bash
    const end = /hi$/;
    console.log(end.test("say hi"));           // true (matches "hi" at the end)
    console.log(end.test("say hi there!"));    // false (doesn't match "hi" at the end)
```
4. Matching "hi" Only if It’s the Entire Text (beginEnd)

RegEx: /^hi$/

    Explanation:
        Combining both ^ (start) and $ (end) anchors ensures that the string is exactly "hi" with nothing else before or after it.
        This means only the string "hi" will match; "hello hi" or "hi there" will not match.

    Example:
```bash
    const beginEnd = /^hi$/;
    console.log(beginEnd.test("hi"));          // true (matches exactly "hi")
    console.log(beginEnd.test("hi there!"));   // false (not exactly "hi")
    console.log(beginEnd.test("oh hi"));       // false (not exactly "hi")
```
Visual Examples

Imagine you have the string "oh hi there!". Let's see how each pattern works on this string:

    normal (/hi/):
        Matches: "oh hi there!" → It finds "hi" anywhere in the text.
        Result: true
    begin (/^hi/):
        Does Not Match: "oh hi there!" → "hi" is not at the beginning.
        Result: false
    end (/hi$/):
        Does Not Match: "oh hi there!" → "hi" is not at the end.
        Result: false
    beginEnd (/^hi$/):
        Does Not Match: "oh hi there!" → "hi" is not the entire string.
        Result: false

If you change the string to just "hi", only the beginEnd pattern will match because the string exactly equals "hi".
Summary

    normal: Finds "hi" anywhere.
    begin: Finds "hi" only if it’s at the start.
    end: Finds "hi" only if it’s at the end.
    beginEnd: Finds "hi" only if it’s the entire text.

Each of these patterns is useful in different scenarios where you need to be precise about where "hi" appears in your text.