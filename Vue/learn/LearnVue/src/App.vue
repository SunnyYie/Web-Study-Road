<script setup lang="ts">
import { reactive, ref } from 'vue'

const labelPosition = ref<any>('top')

const formLabelAlign = reactive({
  name: '',
  password: '',
  code: '',
})

const codeUrl = ref<string>('/api/v1/user/code')

const resetCode = () => {
  codeUrl.value = codeUrl.value + '?' + Math.random()
}

const onSubmit = () => {
  fetch('/api/v1/user/create', { method: 'POST', body: JSON.stringify(formLabelAlign), headers: { 'Content-Type': 'application/json' } }).then((res) =>
    res.json()
  ).then((res) => {
    console.log(res);
  })
}
</script>

<template>
  <div>

    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
      <el-form-item label="Name">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="formLabelAlign.code" />
        <img :src="codeUrl" @click="resetCode">
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="onSubmit">提交</el-button>


  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
