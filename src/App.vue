<template>
  <div id="app">
    <aside>
      <nav>
        <figure>
          <img src="" alt="">
          <figcaption>Chsvk</figcaption>
        </figure>
        <ul>
          <li>Home</li>
          <li>Text 2</li>
        </ul>
      </nav>
    </aside>
    <div class="router">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">

body,html{
  margin: 0;
  padding: 0;
}

#app {
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: 20% auto;
  grid-template-areas: aside router;

  aside{
    grid-area: aside;
    margin: 0;
    padding: 0;
    background: black;

  nav{
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-rows: 40% auto;
    grid-template-columns: 100%;
    grid-template-areas: figure ul;

    figure{
      grid-area: figure;
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
      background: white;

      img{
        min-width: 100%;
      }

      figcaption{
        font-weight: bold;
      }
    }

    ul{
      grid-area: ul;
    }
  }

  }

  .router{
    grid-area: router;
  }
}

</style>
