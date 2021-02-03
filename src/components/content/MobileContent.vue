<template>
  <div class="mobile-content">
    <base-text />
    <br>
    <base-group />
    <base-group />
    <base-group />
    <base-group />
  </div>
</template>

<script>
import BaseGroup from '../base/Group'
import BaseText from '../base/Text'
export default {
  components: {
    BaseGroup,
    BaseText
  }
}
</script>

<style scoped>
.mobile-content {
  padding: 30px;
}
</style>