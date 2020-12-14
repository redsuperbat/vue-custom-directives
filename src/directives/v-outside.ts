import { Directive } from "vue";

const vClickOutside: Directive = {
  mounted(el: ClickableEl, binding) {
    el.clickEvent = function (e: Event) {
      // Checking the click was not on the element nor it's children
      if (!(el == e.target || el.contains(e.target as Node))) {
        // call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener("click", el.clickEvent);
  },
  unmounted(el: ClickableEl) {
    document.removeEventListener("click", el.clickEvent);
  },
};

interface ClickableEl extends Element {
  clickEvent: (e: Event) => void;
}

export default vClickOutside;
