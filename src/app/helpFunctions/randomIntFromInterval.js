/**
 *
 * @param {number} min
 * @param {number} max
 * @description return random number from the interval
 * @return {number}
 */
export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}