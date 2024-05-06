/**
 * @file Fixtures - hrt
 * @module fixtures/hrt
 * @see https://codewars.com/kata/52685f7382004e774f0001f7
 */

/**
 * Given a non-negative integer, `seconds`, the functions returns the time in a
 * human-readable format (`HH:MM:SS`).
 *
 * @example
 *  hrt(0) // '00:00:00'
 * @example
 *  hrt(60) // '00:01:00'
 * @example
 *  hrt(359999) // '99:59:59'
 *
 * @param {number} seconds - Time in seconds
 * @return {string} Time in human-readable format (`HH:MM:SS`)
 */
const hrt = (seconds: number): string => {
  /**
   * {@linkcode seconds} in human-readable format.
   *
   * @var {string} formatted
   */
  let formatted: string = ''

  // convert seconds to human-readable time format
  for (const converter of [3600, 60, 1]) {
    /**
     * {@linkcode seconds} in hours, minutes, or seconds.
     *
     * @const {number} time
     */
    const time: number = seconds / converter | 0

    // update formatted time
    formatted += time < 10 ? `0${time}` : time
    if (converter !== 1) formatted += ':'

    // remove converted seconds from total seconds
    seconds -= time * converter
  }

  return formatted
}

export default hrt
