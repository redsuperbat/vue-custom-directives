"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vClickOutside = exports.vScroll = exports.vHover = exports.vExpand = void 0;
const v_expand_1 = __importDefault(require("./directives/v-expand"));
exports.vExpand = v_expand_1.default;
const v_hover_1 = __importDefault(require("./directives/v-hover"));
exports.vHover = v_hover_1.default;
const v_scroll_1 = __importDefault(require("./directives/v-scroll"));
exports.vScroll = v_scroll_1.default;
const v_click_outside_1 = __importDefault(require("./directives/v-click-outside"));
exports.vClickOutside = v_click_outside_1.default;
exports.default = {
    install(app) {
        app.directive("expand", v_expand_1.default);
        app.directive("hover", v_hover_1.default);
        app.directive("scroll", v_scroll_1.default);
        app.directive("click-outside", v_click_outside_1.default);
    },
};
