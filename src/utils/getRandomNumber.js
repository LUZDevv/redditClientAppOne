/**
 * Generates a number between min and max.
 * @param {number} min
 * @param {number} max
 */

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
 export default (min, max) => {
    return Math.floor(Math.random() * max) + min;
  };
  