const MOBILE_EVENTS = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];

/**
 * Get MouseEvent | TouchEvent target clientX + clientY, support pc + mobile
 * @param {Event} event
 */
export function getClientXY(event: MouseEvent | TouchEvent) {
  if (MOBILE_EVENTS.indexOf(event.type) === -1) {
    return {
      clientX: (event as MouseEvent).clientX,
      clientY: (event as MouseEvent).clientY,
    };
  }

  const target = (event as TouchEvent).targetTouches[0] || (event as TouchEvent).touches[0];
  return {
    clientX: target.clientX,
    clientY: target.clientY,
  };
}
