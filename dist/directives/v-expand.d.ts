import { DirectiveBinding } from "vue";
export declare type directions = "x" | "y";
export declare type offsets = "offsetHeight" | "offsetWidth";
declare const vExpand: {
    beforeMount(el: HTMLElement, binding: DirectiveBinding): void;
    mounted(el: HTMLElement): void;
    beforeUnmount(el: HTMLElement): void;
    unmounted(el: HTMLElement): void;
};
export default vExpand;
