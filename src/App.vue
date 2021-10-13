<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">THEOT</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/witness" class="nav-link">Witness</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ones" class="nav-link">Ones</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/percent" class="nav-link">Percent</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ratio" class="nav-link">Ratio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/visualize" class="nav-link">Visualize</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/newRatio" class="nav-link">New Ratio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/createVariantReadings" class="nav-link"
            >Create variant readings</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/populateVariantReadings" class="nav-link"
            >Populate variant readings</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/createPercentages" class="nav-link"
            >Create percentages</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/populatePercentages" class="nav-link"
            >Populate percentages</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/displayPercentages" class="nav-link"
            >Display percentages</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/createRScript" class="nav-link">Create R script</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/populateRScripts" class="nav-link"
            >Populate R scripts</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/displayClusters" class="nav-link"
            >Display clusters</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/createClusterProfileTable" class="nav-link"
            >Create cluster profiles Tables</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/populateClusterProfiles" class="nav-link"
            >Populate cluster profiles</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dots" class="nav-link">Dots</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/wideDots" class="nav-link">WideDots</router-link>
        </li>
      </div>
    </nav>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-item {
  font-size: 11px;
}
</style>
