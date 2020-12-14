import { DirectiveBinding } from "vue";

export type cb = ((bool: boolean) => void) | undefined;

const properties = {
  onMouseEnter() {
    properties.callback?.(true);
  },
  onMouseLeave() {
    properties.callback?.(false);
  },
  callback: undefined as cb,
};

const vHover = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    if (!binding.value) {
      throw new Error("Callback missing in directive");
    }
    properties.callback = binding.value;
    el.addEventListener("mouseenter", properties.onMouseEnter);
    el.addEventListener("mouseleave", properties.onMouseLeave);
  },
  beforeUnmount(el: HTMLElement) {
    el.removeEventListener("mouseenter", properties.onMouseEnter);
    el.removeEventListener("mouseleave", properties.onMouseLeave);
  },
};

export default vHover;
