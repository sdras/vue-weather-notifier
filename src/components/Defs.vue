<template>
	<defs>
	  <linearGradient id="linear-gradient" x1="562.67" y1="312.33" x2="203.5" y2="312.33" gradientUnits="userSpaceOnUse">
	    <stop offset="0" stop-color="#4f1645" stop-opacity="0"/>
	    <stop offset="0.41" stop-color="#4f1645" stop-opacity="0.49"/>
	    <stop offset="0.79" stop-color="#4f1645" stop-opacity="0.86"/>
	    <stop offset="1" stop-color="#4f1645"/>
	  </linearGradient>
	  <linearGradient id="linear-gradient-2" x1="136.75" y1="284.42" x2="454.5" y2="284.42" gradientUnits="userSpaceOnUse">
	    <stop offset="0" stop-color="#414042"/>
	    <stop offset="0.47" stop-color="#414042"/>
	    <stop offset="0.55" stop-color="#393739"/>
	    <stop offset="0.69" stop-color="#231f20"/>
	    <stop offset="0.7" stop-color="#282526"/>
	    <stop offset="0.72" stop-color="#363436"/>
	    <stop offset="0.75" stop-color="#3e3d3f"/>
	    <stop offset="0.79" stop-color="#414042"/>
	    <stop offset="0.79" stop-color="#403f41"/>
	    <stop offset="0.8" stop-color="#323032"/>
	    <stop offset="0.81" stop-color="#2a2829"/>
	    <stop offset="0.82" stop-color="#282526"/>
	    <stop offset="0.83" stop-color="#2f2c2e"/>
	    <stop offset="0.84" stop-color="#393839"/>
	    <stop offset="0.86" stop-color="#3f3e40"/>
	    <stop offset="0.92" stop-color="#414042"/>
	    <stop offset="0.94" stop-color="#3d3c3e"/>
	    <stop offset="0.96" stop-color="#313031"/>
	    <stop offset="0.98" stop-color="#1c1c1d"/>
	    <stop offset="1"/>
	  </linearGradient>
	  <linearGradient id="linear-gradient-3" x1="284.14" y1="268.89" x2="284.14" y2="-17.96" gradientTransform="rotate(-63.6 387.21 177.67)" gradientUnits="userSpaceOnUse">
	    <stop offset="0" stop-color="#1a1a1a"/>
	    <stop offset="0.38" stop-color="#0f0f0f"/>
	    <stop offset="1" stop-color="#010101"/>
	  </linearGradient>
	  <linearGradient id="linear-gradient-4" x1="283.51" y1="241.53" x2="283.51" y2="9.32" gradientTransform="rotate(-63.6 387.21 177.67)" gradientUnits="userSpaceOnUse">
	    <stop offset="0" stop-color="#484848"/>
	    <stop offset="0.64" stop-color="#262626"/>
	    <stop offset="1" stop-color="#181818"/>
	  </linearGradient>
	  <linearGradient id="linear-gradient-5" x1="292.84" y1="156.67" x2="292.84" y2="23.33" gradientUnits="userSpaceOnUse">
	    <stop offset="0" stop-color="#f1f2f2"/>
	    <stop offset="0.8" stop-color="#bcbec0"/>
	    <stop offset="1" stop-color="#ececed"/>
	  </linearGradient>
	  <linearGradient id="linear-gradient-6" x1="223.04" y1="253.82" x2="352.59" y2="253.82" gradientUnits="userSpaceOnUse">
	    <stop offset="0" stop-color="#565871"/>
	    <stop offset="0.1" stop-color="#52546b"/>
	    <stop offset="0.3" stop-color="#505268"/>
	    <stop offset="0.38" stop-color="#47495f"/>
	    <stop offset="0.59" stop-color="#363850"/>
	    <stop offset="0.74" stop-color="#30324a"/>
	    <stop offset="1" stop-color="#20233d"/>
	  </linearGradient>
	  <radialGradient id="radial-gradient" cx="317.14" cy="245" r="66.63" gradientTransform="rotate(90 317.2 249.2)" gradientUnits="userSpaceOnUse">
		  <stop offset="0" stop-color="#130c0e" stop-opacity="0.6"></stop>
		  <stop offset="0.3" stop-color="#130c0e" stop-opacity="0.4"></stop>
		  <stop offset="0.4" stop-color="#130c0e" stop-opacity="0.3"></stop>
		  <stop offset="1" stop-color="#130c0e" stop-opacity="0"></stop>
		</radialGradient>
	  <clipPath id="clip-path" transform="translate(0 58)">
	    <path d="M331.1,203.9c-28.6-16.5-58.1-16.5-86.7,0h0c-14.3,8.3-21.4,16.6-21.4,25s7.1,16.8,21.4,25c28.6,16.5,58.1,16.5,86.7,0,14.3-8.3,21.4-16.6,21.4-25S345.4,212.1,331.1,203.9Z" fill="none"/>
	  </clipPath>
	  <clipPath id="clip-path2" transform="translate(0 58)">
      <path d="M352.6,228.9v12.5c0,8.4-7.2,16.8-21.4,25-28.6,16.5-58.1,16.5-86.7,0-14.3-8.2-21.4-16.6-21.4-25V228.9a15.2,15.2,0,0,1,.5-3.9l.5-1.6a18.8,18.8,0,0,1,1.1-2.4l.9-1.6.5-.8,1.2-1.6.7-.8q5.4-6.3,16.1-12.5c28.6-16.5,58.1-16.5,86.7,0C345.4,212.1,352.6,220.5,352.6,228.9Z" fill="none"/>
    </clipPath>

    <linearGradient id="linear-gradient-15" x1="223.08" y1="250.99" x2="342.52" y2="250.99" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#c1d82f"/>
      <stop offset="0.1" stop-color="#c6d92c"/>
      <stop offset="0.3" stop-color="#c9da2b"/>
      <stop offset="0.55" stop-color="#b9cf32"/>
      <stop offset="0.74" stop-color="#b3cb35"/>
      <stop offset="1" stop-color="#89a63d"/>
    </linearGradient>
    <linearGradient id="linear-gradient-7" x1="265.5" y1="220.46" x2="341.25" y2="220.46" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#009444"/>
      <stop offset="0.04" stop-color="#009444" stop-opacity="0.83"/>
      <stop offset="0.11" stop-color="#009444" stop-opacity="0.61"/>
      <stop offset="0.18" stop-color="#009444" stop-opacity="0.42"/>
      <stop offset="0.27" stop-color="#009444" stop-opacity="0.27"/>
      <stop offset="0.36" stop-color="#009444" stop-opacity="0.15"/>
      <stop offset="0.48" stop-color="#009444" stop-opacity="0.06"/>
      <stop offset="0.63" stop-color="#009444" stop-opacity="0.01"/>
      <stop offset="1" stop-color="#009444" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="linear-gradient-8" x1="298.72" y1="174.63" x2="312.38" y2="198.29" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f0f7f7"/>
      <stop offset="0.26" stop-color="#ecf4f6"/>
      <stop offset="0.54" stop-color="#dfedf3"/>
      <stop offset="0.82" stop-color="#c9e0ee"/>
      <stop offset="1" stop-color="#b8d6ea"/>
    </linearGradient>
    <linearGradient id="linear-gradient-9" x1="283.45" y1="179.9" x2="300.2" y2="208.92" xlink:href="#linear-gradient-8"/>
    <linearGradient id="linear-gradient-10" x1="269.1" y1="190.05" x2="284.22" y2="216.25" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8d6ea"/>
      <stop offset="0.18" stop-color="#c9e0ee"/>
      <stop offset="0.46" stop-color="#dfedf3"/>
      <stop offset="0.74" stop-color="#ecf4f6"/>
      <stop offset="1" stop-color="#f0f7f7"/>
    </linearGradient>
    <radialGradient id="radial-gradient-2" cx="307.16" cy="4167.95" r="1.19" gradientTransform="translate(-3191.2 2545.3) rotate(-120)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fdc110"/>
      <stop offset="0.17" stop-color="#fcba11"/>
      <stop offset="0.41" stop-color="#f8a615"/>
      <stop offset="0.71" stop-color="#f1851c"/>
      <stop offset="1" stop-color="#e95d24"/>
    </radialGradient>
    <radialGradient id="radial-gradient-3" cx="281.6" cy="4180.5" r="1.19" xlink:href="#radial-gradient-2"/>
    <linearGradient id="linear-gradient-11" x1="259.53" y1="239.53" x2="277.64" y2="239.53" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#383938"/>
      <stop offset="0.4" stop-color="#363736"/>
      <stop offset="0.61" stop-color="#2e2f2e"/>
      <stop offset="0.78" stop-color="#212121"/>
      <stop offset="0.93" stop-color="#0e0e0e"/>
      <stop offset="1" stop-color="#010101"/>
    </linearGradient>
    <linearGradient id="linear-gradient-12" x1="265.65" y1="224.71" x2="271.52" y2="224.71" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#feec45"/>
      <stop offset="0.01" stop-color="#feec46"/>
      <stop offset="0.13" stop-color="#fdef4f"/>
      <stop offset="0.3" stop-color="#fdf052"/>
      <stop offset="0.35" stop-color="#fdec4d"/>
      <stop offset="0.58" stop-color="#fee03c"/>
      <stop offset="0.74" stop-color="#fedc36"/>
      <stop offset="1" stop-color="#f8b518"/>
    </linearGradient>
    <radialGradient id="radial-gradient-4" cx="294.39" cy="210.6" r="11.32" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f26932"/>
      <stop offset="0.06" stop-color="#f26b34"/>
      <stop offset="0.3" stop-color="#f36e36"/>
      <stop offset="0.54" stop-color="#f26028"/>
      <stop offset="0.74" stop-color="#f15a22"/>
      <stop offset="1" stop-color="#c83527"/>
    </radialGradient>
    <radialGradient id="radial-gradient-5" cx="1477.17" cy="2109.99" r="1.19" gradientTransform="matrix(0.5, -0.87, -0.87, -0.5, 1361.25, 2545.34)" xlink:href="#radial-gradient-2"/>
    <linearGradient id="linear-gradient-13" x1="237.48" y1="230.72" x2="260.79" y2="230.72" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#009444"/>
      <stop offset="1" stop-color="#009444" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="linear-gradient-14" x1="293.6" y1="254.42" x2="315.63" y2="254.42" xlink:href="#linear-gradient-13"/>
		<linearGradient id="linear-gradient-17" x1="265.5" y1="220.46" x2="341.25" y2="220.46" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#009444"/>
      <stop offset="0.04" stop-color="#009444" stop-opacity="0.83"/>
      <stop offset="0.11" stop-color="#009444" stop-opacity="0.61"/>
      <stop offset="0.18" stop-color="#009444" stop-opacity="0.42"/>
      <stop offset="0.27" stop-color="#009444" stop-opacity="0.27"/>
      <stop offset="0.36" stop-color="#009444" stop-opacity="0.15"/>
      <stop offset="0.48" stop-color="#009444" stop-opacity="0.06"/>
      <stop offset="0.63" stop-color="#009444" stop-opacity="0.01"/>
      <stop offset="1" stop-color="#009444" stop-opacity="0"/>
    </linearGradient>

    <radialGradient id="radial-gradient-20" cx="290.09" cy="206.75" r="72.73" gradientTransform="translate(8.8 4) scale(0.96 1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#231f20" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="linear-gradient-20" x1="233.59" y1="258.05" x2="339.92" y2="258.05" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ea6924"/>
      <stop offset="0.1" stop-color="#f06c27"/>
      <stop offset="0.3" stop-color="#f36e28"/>
      <stop offset="0.31" stop-color="#f26d28"/>
      <stop offset="0.56" stop-color="#e15e26"/>
      <stop offset="0.74" stop-color="#db5926"/>
      <stop offset="1" stop-color="#b13424"/>
    </linearGradient>
    <linearGradient id="linear-gradient-21" x1="233.59" y1="258.05" x2="339.92" y2="258.05" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f8fcff"/>
      <stop offset="0.24" stop-color="#f4f9fe"/>
      <stop offset="0.5" stop-color="#e7f2f9"/>
      <stop offset="0.77" stop-color="#d1e5f2"/>
      <stop offset="1" stop-color="#b8d6ea"/>
    </linearGradient>
    <clipPath id="clip-path-20" transform="translate(0 4)">
      <path d="M322.3,217c-23.5-13.5-47.7-13.5-71.1,0h0c-11.7,6.8-17.6,13.7-17.6,20.5s5.9,13.8,17.6,20.5c23.5,13.5,47.7,13.5,71.1,0,11.7-6.8,17.6-13.7,17.6-20.5S334.1,223.8,322.3,217Z" fill="none"/>
    </clipPath>
    <radialGradient id="radial-gradient-21" cx="327.24" cy="187.43" r="71.25" gradientTransform="translate(-1.3 64.3) scale(1 0.76)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff33b"/>
      <stop offset="0.31" stop-color="#fee62d" stop-opacity="0.71"/>
      <stop offset="1" stop-color="#fdc70c" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="linear-gradient-25" x1="229.18" y1="256.79" x2="346.98" y2="256.79" xlink:href="#linear-gradient-20"/>
    <linearGradient id="linear-gradient-22" x1="229.18" y1="256.79" x2="346.98" y2="256.79" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#565871"/>
      <stop offset="0.1" stop-color="#52546b"/>
      <stop offset="0.3" stop-color="#505268"/>
      <stop offset="0.38" stop-color="#47495f"/>
      <stop offset="0.59" stop-color="#363850"/>
      <stop offset="0.74" stop-color="#30324a"/>
      <stop offset="1" stop-color="#20233d"/>
    </linearGradient>
    <clipPath id="clip-path-21" transform="translate(0 4)">
      <path d="M327.5,211.4c-26-15-52.8-15-78.8,0h0c-13,7.5-19.5,15.1-19.5,22.8s6.5,15.2,19.5,22.8c26,15,52.8,15,78.8,0,13-7.5,19.5-15.1,19.5-22.8S340.5,218.9,327.5,211.4Z" fill="none"/>
    </clipPath>
    <clipPath id="clip-path-22">
      <path d="M327.5,222.7c-26-15-52.8-15-78.8,0h0c-13,7.5-19.5,15.1-19.5,22.8s6.5,15.2,19.5,22.8c26,15,52.8,15,78.8,0,13-7.5,19.5-15.1,19.5-22.8S340.5,230.2,327.5,222.7Z" fill="none"/>
    </clipPath>
    <linearGradient id="linear-gradient-23" x1="293.54" y1="172.77" x2="306.64" y2="195.45" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f68a32"/>
      <stop offset="0.18" stop-color="#f4762b"/>
      <stop offset="0.41" stop-color="#f26626"/>
      <stop offset="0.66" stop-color="#f15d23"/>
      <stop offset="1" stop-color="#f15a22"/>
    </linearGradient>
    <linearGradient id="linear-gradient-24" x1="349.41" y1="167.91" x2="366.44" y2="197.41" gradientTransform="translate(27.6 -45.9) rotate(7.6)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fed900"/>
      <stop offset="0.4" stop-color="#fcc30b"/>
      <stop offset="1" stop-color="#faa51a"/>
    </linearGradient>
    <radialGradient id="radial-gradient-22" cx="338.27" cy="169.03" r="44.52" gradientTransform="translate(27.6 -45.9) rotate(7.6)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fedf00"/>
      <stop offset="0.03" stop-color="#fee000"/>
      <stop offset="0.3" stop-color="#ffe300"/>
      <stop offset="0.52" stop-color="#ffd707"/>
      <stop offset="0.74" stop-color="#ffd10a"/>
      <stop offset="1" stop-color="#fcaf17"/>
    </radialGradient>
    <radialGradient id="radial-gradient-23" cx="338.97" cy="179.5" r="41.33" gradientTransform="translate(27.6 -45.9) rotate(7.6)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fed604"/>
      <stop offset="0.03" stop-color="#fed705"/>
      <stop offset="0.3" stop-color="#feda06"/>
      <stop offset="0.54" stop-color="#ffcc09"/>
      <stop offset="0.74" stop-color="#ffc60a"/>
      <stop offset="1" stop-color="#f99e1c"/>
    </radialGradient>
    <linearGradient id="linear-gradient-25" x1="293.33" y1="229.06" x2="346.83" y2="229.06" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#00001d"/>
      <stop offset="0.36" stop-color="#06051e" stop-opacity="0.83"/>
      <stop offset="0.79" stop-color="#17151f" stop-opacity="0.33"/>
      <stop offset="1" stop-color="#231f20" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="linear-gradient-26" x1="303.48" y1="233.02" x2="344.08" y2="233.02" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff200"/>
      <stop offset="1" stop-color="#231f20" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="linear-gradient-27" x1="326.48" y1="222.75" x2="346.98" y2="222.75" xlink:href="#linear-gradient-11"/>
  </defs>
</template>