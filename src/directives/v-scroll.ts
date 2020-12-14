import { DirectiveBinding } from "vue";

const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as CallbackEl;
        target.callback(target);
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
);

export interface CallbackEl extends Element {
  callback: (el: Element) => void;
}

const vScroll = {
  beforeMount(el: CallbackEl, binding: DirectiveBinding) {
    el.callback = binding.value;
    animatedScrollObserver.observe(el);
  },
};

export default vScroll;
