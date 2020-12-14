"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/");
const properties = {
    offset: "",
    size: "",
    dimension: "x",
    initialStyle: {},
};
function step(timestamp, start, el, startOffset, endOffset) {
    if (start === undefined)
        start = timestamp;
    const elapsed = timestamp - start;
    let sizeOffset = "";
    if (startOffset > endOffset) {
        sizeOffset = `${Math.max(500 - elapsed, endOffset)}px`;
    }
    else {
        sizeOffset = `${Math.min(0.5 * elapsed, endOffset)}px`;
    }
    console.log({ sizeOffset, elapsed });
    el.style[properties.size] = sizeOffset;
    if (elapsed < 500) {
        // Stop the animation after .5 seconds
        requestAnimationFrame((timestamp) => step(timestamp, start, el, startOffset, endOffset));
    }
}
const vExpand = {
    beforeMount(el, binding) {
        if (!binding.arg) {
            throw Error("Must specify x or y direction");
        }
        properties.initialStyle = el.style;
        const sizeProperty = binding.arg === "x" ? "width" : "height";
        properties.size = sizeProperty;
        properties.offset = `offset${utils_1.upperFirst(sizeProperty)}`;
        properties.dimension = binding.arg;
    },
    mounted(el) {
        // Hide overflow to account for collapsed margins in the calculated height
        el.style.overflow = "hidden";
        const offset = el[properties.offset];
        requestAnimationFrame((timestamp) => {
            step(timestamp, undefined, el, 0, offset);
        });
    },
    // TODO: reverse animation before unmount
    beforeUnmount(el) {
        const offset = el[properties.offset];
        el.style.overflow = "hidden";
        requestAnimationFrame((timestamp) => {
            step(timestamp, undefined, el, offset, 0);
        });
    },
    unmounted(el) {
        el.style.overflow = properties.initialStyle.overflow;
    },
};
exports.default = vExpand;
