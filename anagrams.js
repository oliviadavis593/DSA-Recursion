let anagrams = [];

let getAnagrams = (word, anagram) => {
    if (!word) {
        anagrams.push(anagram);
        return;
    }
    for (let i = 0; i < word.length; i++) {
        anagram += word[i];
        getAnagrams(word.slice(0, i) + word.slice(i + 1), anagram);
        anagram = anagram.slice(0, anagram.length - 1);
    }
};

getAnagrams('Hey')
console.log(anagrams)