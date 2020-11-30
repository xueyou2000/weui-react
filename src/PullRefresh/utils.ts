import { Direction } from '.';

/**
 * 获取滚动距离
 */
export function findScrollTop(targetDom: any) {
  if (targetDom === targetDom.window) {
    return window.pageYOffset;
  } else if ('scrollTop' in targetDom) {
    return targetDom.scrollTop;
  } else if (targetDom.current) {
    return targetDom.current.scrollTop;
  } else {
    return 0;
  }
}
/**
 * 获取滚动高度
 */
export function findScrollHeight(targetDom: any) {
  if (targetDom === targetDom.window) {
    return getViewportSize(true)[1];
  } else if ('scrollHeight' in targetDom) {
    return targetDom.scrollHeight;
  } else if (targetDom.current) {
    return targetDom.current.scrollHeight;
  } else {
    return 0;
  }
}

/**
 * 获取Client高度
 */
export function findClientHeight(targetDom: any) {
  if (targetDom === targetDom.window) {
    return getViewportSize(false)[1];
  } else if ('clientHeight' in targetDom) {
    return targetDom.clientHeight;
  } else if (targetDom.current) {
    return targetDom.current.clientHeight;
  } else {
    return 0;
  }
}

/**
 * 获取视窗大小
 * @returns [viewportWidth, viewportHeight]
 */
export function getViewportSize(contaninScroll: boolean = false): number[] {
  return ['Width', 'Height'].map((field) => {
    var prop = `${contaninScroll ? 'offset' : 'client'}${field}` as
      | 'offsetWidth'
      | 'offsetHeight'
      | 'clientWidth'
      | 'clientHeight';
    var doc = window.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return (doc.compatMode === 'CSS1Compat' && documentElementProp) || (body && body[prop]) || documentElementProp;
  });
}

/**
 * 获取文档大小
 */
export function getDocumentSize(contaninScroll: boolean = false): number[] {
  let [viewportWidth, viewportHeight] = getViewportSize(contaninScroll);
  return [viewportWidth + window.pageXOffset, viewportHeight + window.pageYOffset];
}

/**
 * 是否上下边界
 *
 * @param direction   方向
 * @param distance  距离
 */
export function isBound(direction: Direction, distance: number) {
  if ((direction === Direction.up && distance < 0) || (direction === Direction.down && distance > 0)) {
    return true;
  } else {
    return false;
  }
}
