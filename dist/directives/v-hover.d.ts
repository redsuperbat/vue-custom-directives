import { DirectiveBinding } from "vue";
export declare type cb = ((bool: boolean) => void) | undefined;
declare const vHover: {
    beforeMount(el: HTMLElement, binding: DirectiveBinding): void;
    beforeUnmount(el: HTMLElement): void;
};
export default vHover;
