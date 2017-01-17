<template>
  <g id="tornado">
	  <ellipse id="fog" cx="286.8" cy="210.7" rx="73.5" ry="68.6" fill="url(#radial-gradient-20)"/>
	  <g id="tornado-plat">
	    <ellipse id="newgrad" cx="317" cy="249.2" rx="38.5" ry="86" transform="rotate(-82.8 333.58 235.12)" fill="url(#radial-gradient)"/>
	    <g>
	      <g>
	        <path d="M322.3,227.3c-23.5-13.5-47.7-13.5-71.1,0h0c-11.7,6.8-17.6,13.7-17.6,20.5s5.9,13.8,17.6,20.5c23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5S334.1,234.1,322.3,227.3Z" transform="translate(0 4)" fill="#df5f26"/>
	        <path d="M322.3,258.1c-23.5,13.5-47.7,13.5-71.1,0-11.7-6.8-17.6-13.7-17.6-20.5v10.2c0,6.9,5.9,13.8,17.6,20.5,23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5V237.6C339.9,244.5,334.1,251.3,322.3,258.1Z" transform="translate(0 4)" fill="url(#linear-gradient-20)"/>
	        <path d="M322.3,217c-23.5-13.5-47.7-13.5-71.1,0h0c-11.7,6.8-17.6,13.7-17.6,20.5s5.9,13.8,17.6,20.5c23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5S334.1,223.8,322.3,217Z" transform="translate(0 4)" fill="#d75827"/>
	      </g>
	      <g>
	        <path d="M322.3,227.3c-23.5-13.5-47.7-13.5-71.1,0h0c-11.7,6.8-17.6,13.7-17.6,20.5s5.9,13.8,17.6,20.5c23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5S334.1,234.1,322.3,227.3Z" transform="translate(0 4)" fill="#fee23b"/>
	        <path d="M322.3,258.1c-23.5,13.5-47.7,13.5-71.1,0-11.7-6.8-17.6-13.7-17.6-20.5v10.2c0,6.9,5.9,13.8,17.6,20.5,23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5V237.6C339.9,244.5,334.1,251.3,322.3,258.1Z" transform="translate(0 4)" fill="url(#linear-gradient-21)"/>
	        <path d="M322.3,217c-23.5-13.5-47.7-13.5-71.1,0h0c-11.7,6.8-17.6,13.7-17.6,20.5s5.9,13.8,17.6,20.5c23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5S334.1,223.8,322.3,217Z" transform="translate(0 4)" fill="#eaf3f6"/>
	      </g>
	    </g>
	    <g class="tornado-group">
	      <ellipse cx="289.5" cy="245.2" rx="9.3" ry="5.4" fill="#4783c4"/>
	      <ellipse cx="292" cy="240.1" rx="11.1" ry="6.4" fill="#578bc9"/>
	      <ellipse cx="291.9" cy="235.9" rx="12.8" ry="7.4" fill="#6695ce"/>
	      <ellipse cx="290.1" cy="232.4" rx="14.5" ry="8.4" fill="#749fd4"/>
	      <ellipse cx="287.4" cy="229.1" rx="16.2" ry="9.4" fill="#82a9d9"/>
	      <ellipse cx="284.6" cy="225.6" rx="17.9" ry="10.4" fill="#91b4df"/>
	      <ellipse cx="282.5" cy="221.7" rx="19.7" ry="11.4" fill="#a0c0e5"/>
	      <ellipse cx="282.1" cy="216.8" rx="21.4" ry="12.3" fill="#b0cdeb"/>
	      <ellipse cx="284.2" cy="210.8" rx="23.1" ry="13.3" fill="#c0daf2"/>
	      <ellipse cx="289.5" cy="203" rx="24.8" ry="14.3" fill="#d0e8f8"/>
	    </g>
	  </g>
	  <path id="lightning" d="M267.5,237s51.4,18.8,50-7.3S230.8,192,241,204.5s80,36.5,82,7-56-57-63.5-46.5,64,52.5,69.5,40.5-27-60.5-27-42,34,39,32.5,30-10.5-43-8-28l6.5,19s-.5-14.5-2-18.5" transform="translate(0 4)" fill="none" stroke="#eec919" stroke-miterlimit="10"/>
</g>
</template>


<script>
	export default {
		mounted() {
			let audio = new Audio('static/tornado.mp3'),
					tl = new TimelineMax();

			audio.play();
			tl.add("tornado");

			//drops in
			tl.staggerFromTo(".tornado-group ellipse", 1, {
				opacity: 0
			}, {
				opacity: 1,
				ease: Sine.easeOut
			}, 0.15, "tornado");

			tl.staggerFromTo(".tornado-group ellipse", 1, {
				rotation: 0
			}, {
				rotation: 20,
				transformOrigin: "50% 50%",
				repeat: 10,
				yoyo: true,
				ease: Sine.easeInOut
			}, 0.15, "tornado-=1");

			tl.fromTo("#fog", 1, {
				opacity: 0,
				scale: 0,
				x: 75,
				y: 75
			}, {
				opacity: 1,
				scale: 1,
				x: 75,
				y: 75,
				transformOrigin: "50% 50%",
				ease: Sine.easeOut
			}, "tornado");

			tl.fromTo("#lightning", 1.2, {
				drawSVG: "0% -10%"
			}, {
				drawSVG: "100% 110%",
				repeat: 3,
				repeatDelay: 1.5,
				ease: Sine.easeInOut
			}, "tornado");

		}

	}
</script>

<style scoped>
	#tornado {
		-webkit-transform: translate(5px, 54px);
		transform: translate(5px, 54px);
	}
</style>