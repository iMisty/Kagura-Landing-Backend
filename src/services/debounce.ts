/*
 * @Author: Miya
 * @Date: 2020-08-17 00:31:28
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-17 23:33:49
 * @Description: 节流方法
 * @FilePath: /Single-Search/src/services/debounce.ts
 */
const _debounce = (fn: string, delay: number) => {
  // 设定时间
  const delaytime: number = delay || 200;
  // 定时器
  let timer: number | undefined | null = 0;
  return function() {
    // @ts-ignore
    const _this = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      // @ts-ignore
      fn.apply(_this, args);
    }, delay);
  };
};

export default _debounce;
