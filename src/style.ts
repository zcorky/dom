/**
 * Set element style.
 * @param {element}
 * @param {string} name
 * @param {number | string} value
 */
export function setStyle($node: HTMLElement, name: string, value: string | number) {
  const rValue = name === 'zIndex' ? value : typeof value === 'number' ? `${value}px` : value;
  if (($node.style[name]) === rValue) return false;

  $node.style[name] = rValue; // eslint-disable-line
}

/**
 * Set element styles batchly
 * @param $node HTMLElement
 * @param styles batch styles
 */
export function setStyles($node: HTMLElement, styles: { [key: string]: string | number }) {
  Object.keys(styles).forEach(key => {
    setStyle($node, key, styles[key]);
  });
}