<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="input1" prop="input1">
    <el-input v-model="ruleForm.input1"></el-input>
  </el-form-item>
  <template v-if="show">
    <el-form-item label="input2" prop="input2">
      <el-input v-model="ruleForm.input2"></el-input>
    </el-form-item>
    <el-form-item label="input3" prop="input3">
      <el-input v-model="ruleForm.input3"></el-input>
    </el-form-item>
  </template>
  <!-- <template v-if="show">
    <el-form-item label="input2" prop="input2">
      <el-input v-model="ruleForm.input2"></el-input>
    </el-form-item>
  </template> -->
  <el-form-item>
    <el-button @click="show = !show">显隐</el-button>
    <el-button type="primary" @click="submitForm('ruleForm')">触发校验</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  name: 'Root',
  data() {
    return {
      show: false,
      ruleForm: {
        input1: '',
        input2: '',
        input3: ''
      },
      rules: {
        input1: [
          { required: true, message: '请输入input1的值', trigger: 'blur' },
        ],
        input2: [
          { required: true, message: '请输入input2的值', trigger: 'blur' },
        ],
        input3: [
          { required: true, message: '请输入input3的值', trigger: 'blur' },
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('校验通过!');
        } else {
          console.log('校验失败!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>