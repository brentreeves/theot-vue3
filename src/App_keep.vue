<template>
  <div id="app">
    <nav>
      <router-link to="/">THEOT</router-link>
      <div>
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/witness">Witness</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/ones">Ones</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/percent">Percent</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/ratio">Ratio</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/visualize">Visualize</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/newRatio">New Ratio</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/createVariantReadings"
            >Create variant readings</router-link
          >
        </li>
        <li id="nav-item">
          <router-link to="/populateVariantReadings"
            >Populate variant readings</router-link
          >
        </li>
        <li id="nav-item">
          <router-link to="/createPercentages">Create percentages</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/populatePercentages"
            >Populate percentages</router-link
          >
        </li>
        <li id="nav-item">
          <router-link to="/displayPercentages"
            >Display percentages</router-link
          >
        </li>
        <li id="nav-item">
          <router-link to="/createRScript">Create R script</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/populateRScripts">Populate R scripts</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/displayClusters">Display clusters</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/createClusterProfileTable"
            >Create cluster profiles Tables</router-link
          >
        </li>
        <li id="nav-item">
          <router-link to="/populateClusterProfiles"
            >Populate cluster profiles</router-link
          >
        </li>
        <li id="nav-item">
          <router-link to="/login">Login</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/tutorials">Tutorials</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/add">Add</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/dots">Dots</router-link>
        </li>
        <li id="nav-item">
          <router-link to="/wideDots">WideDots</router-link>
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

#nav-item {
  font-size: 11px;
}
</style>
