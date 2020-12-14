"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animatedScrollObserver = new IntersectionObserver((entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = entry.target;
            target.callback(target);
            animatedScrollObserver.unobserve(entry.target);
        }
    });
});
const vScroll = {
    beforeMount(el, binding) {
        el.callback = binding.value;
        animatedScrollObserver.observe(el);
    },
};
exports.default = vScroll;
