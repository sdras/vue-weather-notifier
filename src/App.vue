<template>
  <div id="app">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695.3 452.7" aria-labelledby="title">
      <app-defs></app-defs>
      <title id="title">
        Phone Notifications
      </title>
      <g style="isolation:isolate">
        <g id="Layer_1" data-name="Layer 1">
          <path fill="#92278f" d="M0 54H695.3V452.67H0z"/>
          <path id="phoneshadow" fill="url(#linear-gradient)" d="M389.2 381.2L559.3 404.3 562.7 220.3 203.5 237.7 389.2 381.2z"/>
          <path id="phonebase" d="M454.5,248.4l-.5,8.9-52,60c-5.3,8.7-28.7,4.7-28.7,4.7L141.4,261.4h0l-.7-.2h-.1a4.5,4.5,0,0,1-3.2-3.4h0v-.5a0,0,0,0,1,0,0l-.6-11.3Z" transform="translate(0 58)" fill="url(#linear-gradient-2)"/>
          <path d="M445.1,240c8.5,2.3,12,7.8,7.8,12.3L398.2,311c-4.2,4.5-14.5,6.4-23,4.1l-229-60.6c-8.5-2.3-12-7.8-7.8-12.3L193,183.5c4.2-4.5,14.5-6.4,23-4.1Z" transform="translate(0 58)" fill="url(#linear-gradient-3)"/>
          <path d="M418.1,240.2c2.3.6,3.1,2.2,1.9,3.6l-54.5,58.5c-1.3,1.4-4.2,2-6.5,1.4L167,252.7c-2.3-.6-3.1-2.2-1.9-3.6l54.5-58.5c1.3-1.4,4.2-2,6.5-1.4Z" transform="translate(0 58)" fill="url(#linear-gradient-4)"/>
          <path d="M189.1,207.6c.8.2,1.1.7.7,1.1l-15.8,17a2.3,2.3,0,0,1-2,.4h0c-.8-.2-1.1-.7-.7-1.1l15.8-17a2.3,2.3,0,0,1,2-.4Z" transform="translate(0 58)" fill="#313131"/>
          <g id="phonebutton" @click="updateTemplate" v-if="!showWeather">
            <transition 
              @before-enter="beforeEnterStroke"
              @enter="enterStroke"
              :css="false"
              appear>
              <path class="main-button" d="M413,272.2c5.1,1.4,7.2,4.7,4.7,7.4s-8.7,3.8-13.8,2.5-7.2-4.7-4.7-7.4S407.9,270.9,413,272.2Z" transform="translate(0 58)" fill="none"/>
            </transition>
            <path d="M413,272.2c5.1,1.4,7.2,4.7,4.7,7.4s-8.7,3.8-13.8,2.5-7.2-4.7-4.7-7.4S407.9,270.9,413,272.2Z" transform="translate(0 58)" fill="#272829"/>
            <path d="M401.4,273.5l1-.9a8.5,8.5,0,0,0-3.2,2c-2.5,2.7-.5,6,4.7,7.4a17.5,17.5,0,0,0,3.1.5C400.8,280.9,398.3,276.9,401.4,273.5Z" transform="translate(1 58)" fill="#414141" style="opacity:0.8"/>
          </g>
          </transition>
          <transition 
              @leave="leaveDialog"
              :css="false">
          <app-dialog v-if="showWeather"></app-dialog>
          </transition>
          <transition 
              @leave="leaveDroparea"
              :css="false">
            <g v-if="showWeather">
              <app-droparea v-if="template === 1"></app-droparea>
              <app-windarea v-else-if="template === 2"></app-windarea>
              <app-rainbowarea v-else-if="template === 3"></app-rainbowarea>
              <app-tornadoarea v-else></app-tornadoarea>
            </g>
          </transition>
          <g v-if="!showWeather">
            <transition 
              @before-enter="beforeEnter"
              @enter="enter"
              :css="false"
              appear>
              <text class="press" transform="translate(371.5 315)" font-size="18" fill="#f7941d" font-family="TitilliumWeb-Regular, Titillium Web">
                P<tspan x="10.7" y="0" letter-spacing="-0.01em">r</tspan><tspan x="16.7" y="0">ess me!</tspan>
              </text>
            </transition>
          </g>
        </g>
      </g>
    </svg>


  </div>
</template>

<script>
  import Defs from './components/Defs.vue';
  import Dialog from './components/Dialog.vue';
  import Droparea from './components/Droparea.vue';
  import Rainbowarea from './components/Rainbowarea.vue';
  import Windarea from './components/Windarea.vue';
  import Tornadoarea from './components/Tornadoarea.vue';

  export default {

    computed: {
      showWeather() {
        return this.$store.state.showWeather;
      },
      template() {
        return this.$store.state.template;
      }
    },
    methods: {
      updateTemplate() {
        this.$store.commit('updateTemplate');
      },
      beforeEnter(el) {
        el.style.opacity = 0;
      }, 
      enter(el, done) {
        const tl = new TimelineMax({
          onComplete: done
        });

        tl.set(el, {
          opacity: 0,
          scale: 0.9,
          visibility: 'visible',
          transformOrigin: '50% 50%'
        });
        
        tl.to(el, 0.75, {
          opacity: 1,
          scale: 1,
          ease: Circ.easeOut
        }, 1);

        tl.to(el, 0.75, {
          opacity: 0.8,
          scale: 0.97,
          repeat: 5,
          yoyo: true,
          ease: Sine.easeOut
        });

         tl.to(el, 1, {
          opacity: 0,
          scale: 0.9,
          ease: Sine.easeIn
        }, "+=0.5");

      },
      beforeEnterStroke(el) {
        el.style.strokeWidth = 0;
        el.style.stroke = 'orange';
      }, 
      enterStroke(el, done) {
        const tl = new TimelineMax({
          onComplete: done
        });
        
        tl.to(el, 0.75, {
          strokeWidth: 1,
          ease: Circ.easeOut
        }, 1);

        tl.to(el, 4, {
          strokeWidth: 0,
          opacity: 0,
          ease: Sine.easeOut
        });

      },
      leaveDroparea(el, done) {
        const tl = new TimelineMax({
          onComplete: done
        });

        tl.to(el, 1, {
          opacity: 0,
          ease: Sine.easeIn
        });

      },
      leaveDialog(el, done) {
        const tl = new TimelineMax({
          onComplete: done
        });

        tl.add("leave");

        tl.to(el, 0.3, {
          rotation: -2,
          repeat: 2,
          yoyo: true,
          transformOrigin: "50% 100%",
          ease: Sine.easeInOut
        }, "leave");

        tl.fromTo(el, 1, {
          opacity: 1
        }, {
          opacity: 0,
          ease: Sine.easeIn
        }, "leave");

      }
    },
    components: {
      appDefs: Defs,
      appDialog: Dialog,
      appDroparea: Droparea,
      appWindarea: Windarea,
      appRainbowarea: Rainbowarea,
      appTornadoarea: Tornadoarea,
    }
}
</script>

<style>
  body {
    overflow: hidden;
  }

  #app {
    font-family: 'Titillium Web', sans-serif;
  }

  .press {
    visibility: hidden;
  }

  .fadeout-enter-active, .fadeout-leave-active {
    transition: opacity .25s
  }

  .fadeout-enter, .fadeout-leave-to {
    opacity: 0
  }

  #thx-button, #phonebutton {
    cursor: pointer;
  }
</style>
