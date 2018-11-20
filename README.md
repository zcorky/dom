# dom

[![NPM version](https://img.shields.io/npm/v/@zcorky/dom.svg?style=flat)](https://www.npmjs.com/package/@zcorky/dom)
[![Dependencies](https://david-dm.org/@zcorky/dom/status.svg)](https://david-dm.org/@zcorky/dom)
[![Build Status](https://travis-ci.com/zcorky/dom.svg?branch=master)](https://travis-ci.com/zcorky/dom)
![license](https://img.shields.io/github/license/zcorky/dom.svg)
[![issues](https://img.shields.io/github/issues/zcorky/dom.svg)](https://github.com/zcorky/dom/issues)

> Dom utils

### Install

```
$ npm install @zcorky/dom
```

### Usage

```javascript
import {
  $,
  setStyle, setStyles,
  addEvent, addEvents,
  removeEvent, removeEvents,
  onTap,
} from '@zcorky/dom';

// 1 get element, remove jquery
const $element = $('#root') // powered by document.querySelector

// 2 set style(s)
setStyle($element, 'width', 10);
setStyle($element, 'width', '100px');
setStyle($element, 'zIndex', 10);
setStyle($element, 'transform', 'translate3d(10, 10, 0)');
// or batch
setStyles($element, {
  'width': 10,
  'zIndex': 10,
  'transform': 'translate3d(10, 10, 0)',
});

// 3 add/remove event
const handler = event => { /* do something */ }
addEvent($element, 'click', handler);
addEvent($element, 'tap', handler); // support simple tap event for mobile
// = onTap($element, handler);
// or batch
addEvents($element, ['click', 'tap'], handler);
```