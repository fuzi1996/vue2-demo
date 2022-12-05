<template>
  <div>
    Child:{{getCode()}}
    codeInChild: {{codeInChild}}
  </div>
</template>

<script>
export default {
  name: 'Child',
  inject:['getCode'],
  data () {
    return {

    }
  },
  computed:{
    codeInChild(){
      return this.getCode()
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