/**
 * Get element
 * @param {string | element} selector 
 */
export function $(selector: string | HTMLElement) {
  return typeof selector === 'string' ? document.querySelector(selector) : selector;
}