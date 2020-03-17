<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,700,800,900&display=swap');

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
