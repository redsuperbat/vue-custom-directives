interface CallbackEl extends Element {
    callback: (el: Element) => void;
}
declare const vScroll: {
    beforeMount(el: CallbackEl, binding: any): void;
};
export default vScroll;
