
<script>
import Flicking from "@egjs/vue3-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";

export default {
  components: {
    Flicking
  },
  data() {
    return {
      plugins: [new Arrow()]
    }
  }
}

  </script>
<template>
<Flicking :options="{ moveType: 'freeScroll', bound: true }">
    <span class="button mr-2 is-white">🍎 Apple</span>
    <span class="button mr-2 is-white">🍉 Watermelon</span>
    <span class="button mr-2 is-white">🥝 Kiwi</span>
    <span class="button mr-2 is-white">...</span>
  </Flicking>
</template>