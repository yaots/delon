import { Renderer2 } from '@angular/core';

function removeClass(
  el: HTMLElement,
  classMap: object,
  renderer: Renderer2,
): void {
  // tslint:disable-next-line:forin
  for (const i in classMap) {
    renderer.removeClass(el, i);
  }
}

function addClass(
  el: HTMLElement,
  classMap: object,
  renderer: Renderer2,
): void {
  for (const i in classMap) {
    if (classMap[i]) {
      renderer.addClass(el, i);
    }
  }
}

/**
 * 更新宿主组件样式 `class`，例如：
 *
 * ```ts
 * updateHostClass(
 *  this.el.nativeElement,
 *  {
 *    [ 'classname' ]: true,
 *    [ 'classname' ]: this.type === '1',
 *    [ this.cls ]: true,
 *    [ `a-${this.cls}` ]: true
 *  },
 *  this.renderer)
 * ```
 *
 * @param [cleanAll] 是否先清理所有 `class` 值，默认：`false`
 */
export function updateHostClass(
  el: HTMLElement,
  renderer: Renderer2,
  classMap: object,
  cleanAll = false
): void {
  if (cleanAll === true) {
    renderer.removeAttribute(el, 'class');
  } else {
    removeClass(el, classMap, renderer);
  }
  classMap = { ...classMap };
  addClass(el, classMap, renderer);
}
