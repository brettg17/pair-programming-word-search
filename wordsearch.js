const wordSearch = (letters, word) => {
    //console.log('Original array: ', letters);
    const horizontalJoin = letters.map(ls => ls.join(''))
    //console.log('Fixed arrays: ', horizontalJoin);
  
    //Check if word present horizontally
    if (horizontalJoin.includes(word)) {
        return true;
  
    } else {
        //console.log('Word not found. Initializing array transposition');
        //if not present horizontally, check vertically by using array transpotition
        const transpondedArray = []
        const row = horizontalJoin.length;
        const columns = horizontalJoin[0].length
  
        for (let row = 0; row < columns; row++) {
            //Initiate a new row variable
            let newRow = [];
            //For every element of the matrix
            for (const element of horizontalJoin) {
                //push the first element of given row into the new row and continue to the next row 
                newRow.push(element[row]);
            }
            //Push the new row into the transponded array
            transpondedArray.push(newRow)
        }
        //Join Words from transponded array
        const horizontalTranspondedJoin = transpondedArray.map(ls => ls.join(''));
        //Check if the word appears in the transponded ara
        if (horizontalTranspondedJoin.includes(word)) {
            return true;
        } else {
            return false;
        }
    }
  }

  module.exports = wordSearch

  //Done by Jose Eduardo Payamps and Brett Gelinas