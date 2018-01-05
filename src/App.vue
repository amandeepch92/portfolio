<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  name: 'app',
  components:{
    Footer,Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.copyright{
  background-color: #1a252f;
  position: absolute;
  right: 0;
  bottom: 0;
  left:0
}
</style>
