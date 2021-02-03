<template>
  <div>
    <base-text :max="200" type="title"  />
    <base-group v-for="i in menu"  :title="i.title" :key="`g2-${i}`" />
    <br />
    <base-text :max="200" type="title" />
    <base-group v-for="i in 5" :key="`g2-${i}`" />
  </div>
</template>

<script>
import BaseText from "../base/Text";
import BaseGroup from "../base/Group";
export default {
  components: {
    BaseText,
    BaseGroup,
  },
  data() {
    return {
      menu: [
        {title: "Hello"}
      ]
    }
  }
};
</script>
