<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="colour in colours" :key="colour" @click="matchColor(colour)">
    {{ colour}}
  </button>
</template>

<script>

import { colourArray } from "../composables/ColorPicker";

export default {
  setup() {
    const {colours, message, matchColor }  = colourArray();
    return{colours, message, matchColor}
  },
};
</script>
<style></style>
