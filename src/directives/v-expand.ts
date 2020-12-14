import { upperFirst } from "../utils/";

type directions = "x" | "y";
type offsets = "offsetHeight" | "offsetWidth";

const properties = {
  offset: "" as keyof HTMLElement,
  size: "",
  dimension: "x" as directions,
  initialStyle: {} as CSSStyleDeclaration,
};

function step(
  timestamp: number,
  start: number | undefined,
  el: HTMLElement,
  startOffset: number,
  endOffset: number
) {
  if (start === undefined) start = timestamp;
  const elapsed = timestamp - start;
  let sizeOffset = "";
  if (startOffset > endOffset) {
    sizeOffset = `${Math.max(500 - elapsed, endOffset)}px`;
  } else {
    sizeOffset = `${Math.min(0.5 * elapsed, endOffset)}px`;
  }
  console.log({ sizeOffset, elapsed });
  el.style[properties.size] = sizeOffset;
  if (elapsed < 500) {
    // Stop the animation after .5 seconds
    requestAnimationFrame((timestamp) =>
      step(timestamp, start, el, startOffset, endOffset)
    );
  }
}

const vExpand = {
  beforeMount(el: HTMLElement, binding) {
    if (!binding.arg) {
      throw Error("Must specify x or y direction");
    }
    properties.initialStyle = el.style;
    const sizeProperty = binding.arg === "x" ? "width" : "height";
    properties.size = sizeProperty;
    properties.offset = `offset${upperFirst(sizeProperty)}` as offsets;

    properties.dimension = binding.arg as directions;
  },

  mounted(el: HTMLElement) {
    // Hide overflow to account for collapsed margins in the calculated height
    el.style.overflow = "hidden";
    const offset = el[properties.offset] as number;
    requestAnimationFrame((timestamp) => {
      step(timestamp, undefined, el, 0, offset);
    });
  },

  // TODO: reverse animation before unmount
  beforeUnmount(el: HTMLElement) {
    const offset = el[properties.offset] as number;
    el.style.overflow = "hidden";
    requestAnimationFrame((timestamp) => {
      step(timestamp, undefined, el, offset, 0);
    });
  },

  unmounted(el: HTMLElement) {
    el.style.overflow = properties.initialStyle.overflow;
  },
};

export default vExpand;
