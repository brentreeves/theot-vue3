<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div>
      <button
        class="btn btn-outline-secondary"
        type="button"
        @click="toggleFields"
      >
        Toggle Fields
      </button>
    </div>
    <div>
      <p v-if="fieldList">true</p>
      <p v-else>false</p>
    </div>
    <div class="col-md-6">
      <h4>Dots List</h4>
      <div v-if="fieldList">
        <ul class="list-group">
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(wit, index) in dots"
            :key="index"
            @click="setActiveTutorial(tutorial, index)"
          >
            {{ index + 1 }} {{ wit.book }} {{ wit.w }} {{ wit.witness }}
          </li>
        </ul>
      </div>
      <div v-else>
        <table>
          <tr>
            <th>ID</th>
            <th>Book</th>
            <th>Witness</th>
            <th>W</th>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
          </tr>
          <tr v-for="(wit, index) in dots" :key="index">
            <td>{{ wit.id }}</td>
            <td>{{ wit.book }}</td>
            <td>{{ wit.witness }}</td>
            <td>{{ wit.w }}</td>
            <td>{{ wit.verses[1] }}</td>
            <td>{{ wit.verses[2] }}</td>
            <td>{{ wit.verses[3] }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DotsDataService from "../services/DotsDataService";

export default {
  name: "dots-list",
  data() {
    return {
      dots: [],
      fieldList: true,
      limitedFields: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
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

    // select some fields
    setLimitedFields() {},

    setFieldList(aThing) {
      this.fieldList = aThing;
    },

    refreshList() {
      this.retrievedots();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },

    removeAlldots() {
      DotsDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    toggleFields() {
      this.fieldList = !this.fieldList;
    },

    // should do this locally, in the cached "dots" property, not hit the database
    searchTitle() {
      DotsDataService.findByTitle(this.title)
        .then((response) => {
          this.dots = response.data;
          this.setActiveTutorial(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrievedots();
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
