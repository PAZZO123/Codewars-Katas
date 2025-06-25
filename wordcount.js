const wordCount = (s) => {
  const exclude = ["a", "the", "on", "at", "of", "upon", "in", "as"];
  const result = [];
  let word = "";

  for (let i = 0; i <= s.length; i++) {
    const char = s[i] || ' '; 

    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      word += char; 
    } else if (word) {
      const lowerWord = word.toLowerCase();
      if (!exclude.includes(lowerWord)) {
        result.push(word);
      }
      word = ""; 
    }
  }

  return result.length;
};
console.log(wordCount("at a nap the"));
/*Kate likes to count words in text blocks. By words she means continuous sequences of English alphabetic characters (from a to z ). Here are examples:

Hello there, little user5453 374 ())$. I’d been using my sphere as a stool. Slow-moving target 839342 was hit by OMGd-63 or K4mp. contains "words" ['Hello', 'there', 'little', 'user', 'I', 'd', 'been', 'using', 'my','sphere', 'as', 'a', 'stool', 'Slow', 'moving', 'target', 'was', 'hit', 'by', 'OMGd', 'or', 'K', 'mp']

Kate doesn't like some of words and doesn't count them. Words to be excluded are "a", "the", "on", "at", "of", "upon", "in" and "as", case-insensitive.

Today Kate's too lazy and have decided to teach her computer to count "words" for her.*/