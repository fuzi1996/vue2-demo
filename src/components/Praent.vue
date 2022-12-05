<template>
  <div>
    Parent: {{getCode()}}
    <Child/>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  name: 'Parent',
  inject:['getCode'],
  components:{
    Child
  },
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