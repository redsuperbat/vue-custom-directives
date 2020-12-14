import { DirectiveBinding } from "vue";
declare const vClickOutside: {
    mounted(el: ClickableEl, binding: DirectiveBinding): void;
    unmounted(el: ClickableEl): void;
};
export interface ClickableEl extends Element {
    clickEvent: (e: Event) => void;
}
export default vClickOutside;
