<template>
  <div>
    <h1>Visualizing data based on percentage agreement</h1>
    <p>Data with higher percent similiary will receive a longer arc.</p>
    <v-app>
      <v-container>
        <v-row>
          <v-col cols="4" class="d-flex justify-center align-center">
            <div class="pa-2"></div>
          </v-col>
          <v-col id="arc" />
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "App",
  data() {
    return {
      wit: [
        { witness: "W01", percent: 1.0 },
        { witness: "W02", percent: 0.891 },
        { witness: "W03", percent: 0.874 },
        { witness: "W04", percent: 0.879 },
        { witness: "W05", percent: 0.892 },
        { witness: "W06", percent: 0.965 },
        { witness: "W07", percent: 0.885 },
      ],
    };
  },
  mounted() {
    this.generateArc();
  },
  methods: {
    generateArc() {
      const w = 500;
      const h = 500;

      const svg = d3
        .select("#arc")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

      const sortedPercents = this.wit.sort((a, b) =>
        a.percent > b.percent ? 1 : -1
      );
      const color = d3.scaleOrdinal(d3.schemeDark2);

      const max_percent = d3.max(sortedPercents, (o) => o.percent);

      const angleScale = d3
        .scaleLinear()
        .domain([0, max_percent])
        .range([0, 2 * Math.PI]);

      const size = 30;

      const arc = d3
        .arc()
        .innerRadius((d, i) => (i + 1) * size)
        .outerRadius((d, i) => (i + 2) * size)
        .startAngle(angleScale(0))
        .endAngle((d) => angleScale(d.percent));

      const g = svg.append("g");

      g.selectAll("path")
        .data(sortedPercents)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d, i) => color(i))
        .attr("stroke", "#FFF")
        .attr("stroke-width", "1px")
        .on("mouseenter", function () {
          d3.select(this).transition().duration(200).attr("opacity", 0.5);
        })
        .on("mouseout", function () {
          d3.select(this).transition().duration(200).attr("opacity", 1);
        });

      g.selectAll("text")
        .data(this.wit)
        .enter()
        .append("text")
        .text((d) => `${d.witness} -  ${d.percent * 100}%`)
        .attr("font-size", size / 2.3)
        .attr("x", 5)
        .attr("dy", -8)
        .attr("y", (d, i) => -(i + 1) * size);

      g.attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");
    },
  },
};
</script>
