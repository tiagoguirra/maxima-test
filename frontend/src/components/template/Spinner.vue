<template>
  <div class="spinner-block">
    <div class="spinner spinner-3" :class="color"></div>
  </div>
</template>
<script>
export default {
  name: "Spinner",
  props: {
    color: {
      type: String,
      default: "",
      required: false
    }
  }
};
</script>
<style>
.spinner {
  position: relative;
  width: 125px;
  height: 125px;
}
.spinner:before,
.spinner:after {
  content: "";
  display: block;
  position: absolute;
  border-width: 4px;
  border-style: solid;
  border-radius: 50%;
}
.spinner.spinner-3.white:before,.spinner.spinner-3.white:after{
    border-color: #fff;
}
.spinner.spinner-3:before {
  width: 117px;
  height: 117px;
  border-color: var(--default-blue);
  top: 0px;
  left: 0px;
  -webkit-animation: scale-2 1s linear 0s infinite;
  animation: scale-2 1s linear 0s infinite;
}
.spinner.spinner-3:after {
  width: 117px;
  height: 117px;
  border-color: var(--default-blue);
  top: 0;
  left: 0;
  opacity: 0;
  -webkit-animation: scale-2 1s linear 0.5s infinite;
  animation: scale-2 1s linear 0.5s infinite;
}

/* spinner-3 styles */
@-webkit-keyframes scale-2 {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  50% {
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
@keyframes scale-2 {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  50% {
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>

