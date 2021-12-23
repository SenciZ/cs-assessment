
// const myArray = [1,2,3,2,3,-3]

// const addToZero = arr =>{
//     if(arr.length === 0){
//         return false;
//     }

//     for(let i = 0; i<arr.length; i++){
//         for(let j = 0; j<arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return true
//             }
//         }
//     }
//     return false;
// }

// console.log(addToZero(myArray))

// The runtime complexity of the addToZero function if O(n^2) and the space complexity is O(n^2)


// ========================================================================================================


// const myWord = "Monday"

// function hasUniqueChars(word){
//     const letterSet = new Set()
//     for(let i = 0; i < word.length; i++){
//         letterSet.add(word[i])
//         console.log(letterSet)
//     }
//     newWord = Array.from(letterSet).join('').toLowerCase()
//     console.log(newWord)
//     console.log(word.toLowerCase())
//     if(newWord === word.toLowerCase()){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(hasUniqueChars(myWord))

// The runtime complexity of the hasUniqueChars function if O(n) and the space complexity is O(n)

// ========================================================================================================

// const wordList = ['hi', 'hello', 'Stuff and More']

// const findLongestWord = arr =>{
//     let longestWord = 0;
//     arr.forEach(element => {
//         if(element.length > longestWord){
//             longestWord = element.length
//         } else {
//             longestWord = longestWord
//         }
//     });
//     return longestWord
// }

// console.log(findLongestWord(wordList))

// The runtime complexity of the findLongestWord function if O(n) and the space complexity is O(n)


// ========================================================================================================



// function isPangram(word){
//     const newWord = word.toLowerCase().replace(/[^A-Za-z]/g, '')
//     const letterSet = new Set()
//     for(let i = 0; i < newWord.length; i++){
//         letterSet.add(newWord[i])
//     }

//     if(letterSet.size === 26){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

// The runtime complexity of the findLongestWord function if O(n^2) and the space complexity is O(n^2)
