import vExpand from "./directives/v-expand";
import vHover from "./directives/v-hover";
import vScroll from "./directives/v-scroll";
import vClickOutside from "./directives/v-click-outside";
import { App } from "vue";

export { vExpand, vHover, vScroll, vClickOutside };

export default {
  install(app: App) {
    app.directive("expand", vExpand);
    app.directive("hover", vHover);
    app.directive("scroll", vScroll);
    app.directive("click-outside", vClickOutside);
  },
};
