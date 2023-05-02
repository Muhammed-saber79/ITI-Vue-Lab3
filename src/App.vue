<template>
  <div class="container gap-3">
    <!-- Header Component -->
    <HeaderComponent :branch="{name:'Mansoura', intake:'43', track:'os'}"></HeaderComponent>

    <!-- Main -->
    <div class="row">
      <!-- SideNav Component -->
      <SideNavComponent></SideNavComponent>

      <!-- Content Component -->
      <ContentComponent></ContentComponent>
    </div>

    <!-- Footer Component -->
    <FooterComponent></FooterComponent>

  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import SideNavComponent from './components/SideNavComponent.vue';
import ContentComponent from './components/ContentComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SideNavComponent,
    ContentComponent,
    FooterComponent
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.row{
  margin: 15px 15px;
}
</style>
