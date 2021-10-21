<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <button
        class="btn btn-outline-secondary"
        type="button"
        @click="toggleFields"
      >
        Toggle Fields
      </button>
    </div>
  </div>
  <div class="col-md-12">
    <h4>Dots List</h4>
    <div v-if="fieldList">
      <div class="list row">
        <ul class="list-group">
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(wit, index) in ratios"
            :key="index"
          >
            {{ index + 1 }} {{ wit[0] }} {{ wit[1] }} {{ wit[2] }}
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <div class="container-fluid">
        <table>
          <tr class="border">
            <th>Witness</th>
            <th v-for="(w, index) in ratios[0]" :key="index">
              {{ w }}
            </th>
          </tr>
          <tr v-for="(wit, index) in ratios" :key="index">
            <td class="border" v-for="(cc, index) in wit" :key="index">
              {{ cc }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DotsDataService from "../services/DotsDataService";
import RatiosDataService from "../services/RatiosDataService";

export default {
  name: "dots-list",
  data() {
    return {
      dots: [],
      ratios: [],
      fieldList: true,
      limitedFields: [],
      dotsVerseList: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
    };
  },

  methods: {
    retrieveratios() {
      RatiosDataService.getAll()
        .then((response) => {
          this.ratios = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    retrievedots() {
      DotsDataService.getAll()
        .then((response) => {
          this.dots = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    toggleFields() {
      this.fieldList = !this.fieldList;
    },

    // select some fields
    setLimitedFields() {},

    setFieldList(aThing) {
      this.fieldList = aThing;
    },

    refreshList() {
      this.retrieveratios();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    // should do this locally, in the cached "dots" property, not hit the database
  },
  mounted() {
    // this.retrievedots();
    this.retrieveratios();
    this.setFieldList(true);
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
