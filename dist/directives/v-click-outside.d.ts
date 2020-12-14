declare const vClickOutside: {
    mounted(el: ClickableEl, binding: any): void;
    unmounted(el: ClickableEl): void;
};
interface ClickableEl extends Element {
    clickEvent: (e: Event) => void;
}
export default vClickOutside;
