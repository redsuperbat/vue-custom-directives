import vExpand from "./directives/v-expand";
import vHover from "./directives/v-hover";
import vScroll from "./directives/v-scroll";
import vClickOutside from "./directives/v-click-outside";
import { App } from "vue";

export { vExpand, vHover, vScroll, vClickOutside };

export default {
  install(app: App) {
    app.directive("v-expand", vExpand);
    app.directive("v-hover", vHover);
    app.directive("v-scroll", vScroll);
    app.directive("v-click-outside", vClickOutside);
  },
};
