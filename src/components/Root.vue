<template>
  <div>
    Root: {{getCode()}}
    <Parent/>
  </div>
</template>

<script>
import Parent from './Praent.vue'
export default {
  name: 'Root',
  components:{
    Parent
  },
  inject:['getCode'],
  props: {

  },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  },
  watch:{

  }
}
</script>

<style scoped>

</style>