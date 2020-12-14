import { DirectiveBinding } from "vue";
export interface CallbackEl extends Element {
    callback: (el: Element) => void;
}
declare const vScroll: {
    beforeMount(el: CallbackEl, binding: DirectiveBinding): void;
};
export default vScroll;
