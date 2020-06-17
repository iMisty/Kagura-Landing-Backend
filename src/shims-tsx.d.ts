/*
 * @Author: your name
 * @Date: 2020-06-11 14:28:24
 * @LastEditTime: 2020-06-17 16:38:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /Single-Search/src/shims-tsx.d.ts
 */ 
import Vue, { VNode } from 'vue';

declare global {
  namespace TSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
