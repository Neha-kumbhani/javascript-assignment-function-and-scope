function wordCount(str) { 
  return str.split(" ").length;
}

console.log(wordCount("Hello")); // returns 1 as int
console.log(wordCount("Hello, World!")); // returns 2
console.log(wordCount("No results for search term `s`")); // returns 6
console.log(wordCount(" Hello")); // returns 1
