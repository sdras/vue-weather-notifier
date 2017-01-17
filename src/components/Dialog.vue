<template>
	<g id="dialog">
    <path d="M414.3,39.8v77.7c0,9.1-6.5,16.5-14.5,16.5h-178l-1,.7c-12.9,7.3,2.6,22,2.6,22-15.4-2.2-21.2-22-21.2-22l-1-.7H185.8c-8,0-14.5-7.4-14.5-16.5V39.8c0-9.1,6.5-16.5,14.5-16.5H399.9C407.8,23.3,414.3,30.7,414.3,39.8Z" transform="translate(0 58)" stroke="#231f20" stroke-miterlimit="10" fill="url(#linear-gradient-5)"/>
    <text transform="translate(223.2 109.7)" font-size="16" fill="#414042" font-family="TitilliumWeb-Regular, Titillium Web">
      <tspan letter-spacing="-0.02em">W</tspan><tspan x="13.9" y="0" letter-spacing="0em">eather </tspan><tspan x="61.3" y="0" letter-spacing="0em">N</tspan><tspan x="72" y="0" letter-spacing="0em">o</tspan><tspan x="80.4" y="0">tification:</tspan>
      
      <tspan v-if="template === 1" x="11" y="24">Drizzleapocalypse</tspan>
      <tspan v-else-if="template === 2" x="7" y="24">What a windy day!</tspan>
      <tspan v-else-if="template === 3" x="4" y="24">Here comes the sun</tspan>
      <tspan v-else x="69" y="24" text-anchor="middle">Tornado warning!</tspan>

    </text>
    <g id="thx-button" @click="toggle">
      <rect x="235" y="150" width="105" height="28" rx="4" ry="4" fill="#662d91" opacity="0.68"/>
      <text transform="translate(252.1 168.7)" font-size="16" fill="#f1f2f2" font-family="TitilliumWeb-Regular, Titillium Web">
        OK thanks!
      </text>
    </g>
  </g>
</template>


<script>
	export default {
		computed: {
      template() {
        return this.$store.state.template;
      }
    },
    methods: {
      toggle() {
        this.$store.commit('toggle');
      }
    },
		mounted () {
			//enter weather
			const tl = new TimelineMax();

			tl.add("enter");

			tl.fromTo("#dialog", 2, {
				opacity: 0
			}, {
				opacity: 1
			}, "enter");

			tl.fromTo("#dialog", 2, {
				rotation: -4
			}, {
				rotation: 0,
				transformOrigin: "50% 100%",
				ease: Elastic.easeOut
			}, "enter");
		}
	}
	</script>

<style scoped>
	
</style>