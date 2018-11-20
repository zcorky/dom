import isSupportPassive from '@zcorky/is-support-passive';

const NOOP = () => null;

const passiveOptions = isSupportPassive() ? {
  passive: true,
  capture: false,
} : false;

/**
 * addEventListener proxy
 * @param $node HTMLElement
 * @param name event type
 * @param handler event handler
 */
export function addEvent<K extends keyof WindowEventMap>($node: HTMLElement, name: K, handler: (this: Window, ev: WindowEventMap[K]) => any) {
  if (name === 'tap') {
    onTap($node, handler);
    return ;
  }

  $node.addEventListener(name, handler, passiveOptions);
}

export function removeEvent<K extends keyof WindowEventMap>($node: HTMLElement, name: K, handler: (this: Window, ev: WindowEventMap[K]) => any) {
  $node.removeEventListener(name, handler, passiveOptions);
}

/**
 * Compatible addEventListener
 * @param {element} $node
 * @param {array} names
 * @param {function} handler
 */
export function addEvents<K extends keyof WindowEventMap>($node: HTMLElement, names: K[] = [], handler: (this: Window, ev: WindowEventMap[K]) => any = NOOP) {
  names.forEach(name => addEvent($node, name, handler));
}

export function removeEvents<K extends keyof WindowEventMap>($node: HTMLElement, names: K[] = [], handler: (this: Window, ev: WindowEventMap[K]) => any = NOOP) {
  names.forEach(name => removeEvent($node, name, handler));
}

export function onTap<K extends keyof WindowEventMap>($node: HTMLElement, callback: (this: Window, ev: WindowEventMap[K]) => any) {
  let timeout: any = null;
  let lock = false;

  addEvent($node, 'touchstart', () => {
    timeout = Date.now();
  });

  addEvent($node, 'touchmove', () => {
    lock = true;
  });

  addEvent($node, 'touchend', function (event) {
    if (lock) {
      lock = false;
      return false;
    }
    const delta = Date.now() - timeout;
    if (delta < 300) {
      callback.call(this, event);
    }
    timeout = Date.now();
  });
}