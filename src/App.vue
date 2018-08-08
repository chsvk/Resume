<template>
  <div id="app">
    <aside>
      <router-link to="/"><h3>Chsvk</h3></router-link>
      <div class="image"></div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></a></li>
          <li><router-link to="/soon">Projects</router-link></li>
          <li><router-link to="/soon">Blog</router-link></li>
          <li><router-link to="/soon">Achievements</router-link></li>
          <li><router-link to="/soon">Contact</router-link></li>
          <li><router-link to="/soon">Social</router-link></li>
        </ul>
      </nav>
    </aside>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" src="./global.scss">

</style>
