<template>
  <div id="app">
    <aside>
      <h3>Chsvk</h3>
      <div class="image"></div>
      <nav>
        <ul>
          <li><router-link to="/home">Home</router-link></a></li>
          <li><router-link to="/home">Projects</router-link></li>
          <li><router-link to="/home">Blog</router-link></li>
          <li><router-link to="/home">Achievements</router-link></li>
          <li><router-link to="/home">Contact</router-link></li>
          <li><router-link to="/home">Social</router-link></li>
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
