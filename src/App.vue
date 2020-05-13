<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './views/Navbar'

export default {
  name: 'App',
  data(){
    return{

    }
  },
  components: {
    Navbar
  }
}
</script>

<style>

</style>
