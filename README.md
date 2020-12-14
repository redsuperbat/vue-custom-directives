# Vue 3 Directives

## Description

These are useful directives that you can include into your vue application.

| Directive       | Description                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| v-click-outside | Specify a callback that will be triggered when user clicks outside element bound by directive                                                                                               |
| v-expand        | Animate bound element when it enters the DOM. Only applicable if the element is also bound by v-if, v-show or v-else                                                                        |
| v-hover         | Specify a callback that triggers when the user hovers over the element. True is passed to the callback when the user enters the element and false is passed when the user exits the element |
| v-scoll         | Specify a callback that triggers when the element is visible on the page. The callback recives the element as it's argument when invoked                                                    |

## Installation

`npm i --save vue3-directives`

To only use certain directives and reduce bundle size, register your directives show below.

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { vHover } from "vue3-directives";

createApp(App).directive(vHover).mount("#app");
```

After registering `v-hover` is available throughout your entire vue application

There is a quicker way to register all directives if you are going to use them:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import VueCustomDirectives from "vue3-directives";

createApp(App).use(VueCustomDirectives).mount("#app");
```

This will make all directives accessible throughout your application

## Usage

### v-click-outside

```html
<template>
  <div id="main" style="width: 500px; height: 500px">
    <p v-click-outside="clickedOutside">Vue 3 Directives is awesome!</p>
  </div>
</template>

<script>
  export default {
    setup() {
      // Will only fire when the user clicks outside the p element
      const clickedOutside = () => {
        console.log("Im clicking outside the p element");
      };
      return {
        clickedOutside,
      };
    },
  };
</script>
```

### v-hover

```html
<template>
  <div id="main" style="width: 500px; height: 500px">
    <p v-hover="onHover">Vue 3 Directives is awesome!</p>
  </div>
</template>

<script>
  export default {
    setup() {
      // Function will fire when user enters and leaves the element p
      const onHover = (bool) => {
        console.log(bool); // Logs "true" when entering and "false" when leaving
      };
      return {
        onHover,
      };
    },
  };
</script>
```

### v-expand

The p element will animate when the button is clicked to show the text.
v-expand can take two different arguments `v-expand:x` and `v-expand:y` depending on if you want the element to animate in from the x-axis or the y-axis

```html
<template>
  <div id="main" style="width: 500px; height: 500px">
    <p v-expand:y v-if="show">Vue 3 Directives is awesome!</p>
    <button @click="toggleText">click me!</button>
  </div>
</template>

<script>
  import { ref } from "vue";
  export default {
    setup() {
      const show = ref(false);
      const toggleText = () => {
        show.value = !show.value;
      };
      return {
        show,
        toggleText,
      };
    },
  };
</script>
```

### v-scroll

```html
<template>
  <div id="main" style="width: 500px; height: 500px">
    <p v-scroll="onEnter">Vue 3 Directives is awesome!</p>
  </div>
</template>

<script>
  export default {
    setup() {
      // Function will fire when the p element is visible to the user
      // By adding a class that contains an animation you can animate the
      // Element when it is visible to the user
      const onEnter = (el) => {
        el.classList.add("fade-animation");
      };
      return {
        onEnter,
      };
    },
  };
</script>

<style scoped>
  .fade-animation {
    animation: fade 1s ease;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
```
