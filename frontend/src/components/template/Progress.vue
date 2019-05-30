<template>
  <div>
    <div class="progress">
        <div v-bind:class="classProgress"></div>
    </div>
    <div class="block-page" v-if="isToBlockPage">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>  
    </div>  
  </div>    
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name:'Progress',
    props:["type"],
    data: () => ({
        classProgress:"indeterminate"
    }),
    computed:{
      ...mapGetters(['isToBlockPage'])
    },
    mounted(){
        this.classProgress = this.type
    }
}
</script>
<style>
.progress {
  position: fixed;
  height: 4px;
  display: block;
  width: 100%;
  background-color: #418394;
  border-radius: 2px;
  background-clip: padding-box;
  margin: 0;
  overflow: hidden;
  z-index: 150;
}
.progress .determinate {
  position: absolute;
  background-color: inherit;
  top: 0;
  bottom: 0;
  background-color: var(--default-blue);
  transition: width 0.3s linear;
}
.progress .indeterminate {
  background-color: #5692F2;
}
.progress .indeterminate:before {
  content: "";
  position: absolute;
  background-color: inherit;
  top: 0;
  left: 0;
  bottom: 0;
  will-change: left, right;
  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)
    infinite;
  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}
.progress .indeterminate:after {
  content: "";
  position: absolute;
  background-color: inherit;
  top: 0;
  left: 0;
  bottom: 0;
  will-change: left, right;
  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1)
    infinite;
  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1)
    infinite;
  -webkit-animation-delay: 1.15s;
  animation-delay: 1.15s;
}
.block-page{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255,0.5);
  z-index: 140;
  display: flex;
  justify-content: center;
  align-items: center;
}
@-webkit-keyframes indeterminate {
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
}
@keyframes indeterminate {
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
}
@-webkit-keyframes indeterminate-short {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}
@keyframes indeterminate-short {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid var(--default-blue);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--default-blue) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
