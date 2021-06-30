const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// How can we "iterate" through individual words in a string?
// Can we execute an interation inside an iteration? How?
// How can we capitalize just the first letter in a word?

const titleCased = () => {
  return tutorials.map((sentence) => {
    const splittedSentence = sentence.split(" ");
    console.log(splittedSentence);
    const capitalized = splittedSentence.map(
      (word) => word[0].toUpperCase() + word.slice(1)
    );

    const result = capitalized.join(" ");
    return result;
  });
};
//   debugger;
//   splittedArray.map((splittedSentence) => splittedSentence[0].toUpperCase());
//   return splittedArray;
// };
titleCased(tutorials);
