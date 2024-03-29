class Solution {
    /**
     * Returns a set of all permutations and combinations of the
     * characters in the input string.
     *
     * @param {string} str Input string.
     * @return {Set<string>} Permutations and combinations.
     */
    permAndComb(str) {
        return new Set(
            this.combinations(str).flatMap((combination) =>
                this.permutations(combination)
            )
        );
    }

    /**
     * Helper method to get all combinations of the
     * input string's characters.
     *
     * @param {string} str Input string.
     * @return {Array<string>} Combinations.
     */
    combinations(str) {
        let out = [""];
        for (let i = 0; i < str.length; i++) {
            const c = str.charAt(i);
            const includeChar = out.map((item) => item + c);
            includeChar.forEach((s) => (out = out.concat(s)));
        }
        return out;
    }

    /**
     * Returns all permutations of the input string.
     *
     * @param {string} str Input string.
     * @return {Array<string>} Array with all permutations of the string.
     */
    permutations(str) {
        if (str.length === 0) {
            return [];
        } else {
            const first = str.charAt(0);
            const remainder = str.substring(1);
            const remainderPermutations = this.permutations(remainder);
            if (remainderPermutations.length === 0) {
                return [first];
            }
            return remainderPermutations.flatMap((word) =>
                this.insertChar(first, word)
            );
        }
    }

    /**
     * Helper method that inserts the input char at
     * valid positions in the input word and returns
     * all combinations as an array of strings.
     *
     * @param {string} c    Char to insert.
     * @param {string} word Word that will accept the input char.
     * @return {Array<string>} All combinations generated by inserting the char.
     */
    insertChar(c, word) {
        const out = [];
        for (let i = 0; i <= word.length; i++) {
            const left = word.substring(0, i);
            const right = word.substring(i);
            out.push(left + c + right);
        }
        return out;
    }
}

module.exports = Solution;

// top solutions

// class Solution {
//     /**
//      * Returns a set of all permutations and combinations of the
//      * characters in the input string.
//      *
//      * @param {string} str Input string.
//      * @return {Set<string>} Permutations and combinations.
//      */
//     permAndComb(str, current = '', result = []) {
//       if (current) {
//         result.push(current);
//       }

//       for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         const leftSide = str.substring(0, i);
//         const rightSide = str.substring(i + 1);
//         const remaining = leftSide + rightSide;

//         this.permAndComb(remaining, current + char, result);
//       }

//       return result;
//     }

//   }

//   module.exports = Solution;
