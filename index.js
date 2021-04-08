/**
 * isEven - Determines if a number is even or not. Returns false if a non-integer is passed in.
 * 
 * @param {number} int - number to check for evenness.
 * @returns {boolean}
 */

export const isEven = ( int ) => {
    return (typeof int === "number") 
        && Number.isFinite(int)
        && !(int%2);
}