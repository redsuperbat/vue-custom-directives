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

interface CallbackEl extends Element {
  callback: (el: Element) => void;
}

const vScroll = {
  beforeMount(el: CallbackEl, binding) {
    el.callback = binding.value;
    animatedScrollObserver.observe(el);
  },
};

export default vScroll;
