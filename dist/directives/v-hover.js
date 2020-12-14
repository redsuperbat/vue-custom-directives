"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const properties = {
    onMouseEnter() {
        var _a;
        (_a = properties.callback) === null || _a === void 0 ? void 0 : _a.call(properties, true);
    },
    onMouseLeave() {
        var _a;
        (_a = properties.callback) === null || _a === void 0 ? void 0 : _a.call(properties, false);
    },
    callback: undefined,
};
const vHover = {
    beforeMount(el, binding) {
        if (!binding.value) {
            throw new Error("Callback missing in directive");
        }
        properties.callback = binding.value;
        el.addEventListener("mouseenter", properties.onMouseEnter);
        el.addEventListener("mouseleave", properties.onMouseLeave);
    },
    beforeUnmount(el) {
        el.removeEventListener("mouseenter", properties.onMouseEnter);
        el.removeEventListener("mouseleave", properties.onMouseLeave);
    },
};
exports.default = vHover;
