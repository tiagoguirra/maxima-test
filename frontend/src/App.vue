<template>
  <div id="app">
    <Progress class="progress-menu" type="indeterminate" v-if="isLoading"/>
    <Content/>
    <toast-container :toastConfig="customConfig"></toast-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Content from "@/components/template/Content";
import Progress from "@/components/template/Progress";
export default {
  name: "App",
  components: { Content, Progress },
  computed: {
    ...mapGetters(["isLoading"]),
    customConfig: function() {
      return {
        toastContainerId: 1,
        animation: "ease-out-right",
        preventDuplicates: true,
        showCloseButton: true
      };
    }
  }
};
</script>

<style>
@import "./assets/css/global.css";
@import "./assets/css/form.css";
@import "./assets/css/fonts.css";
@import "./assets/css/sweetalert-custom.css";
@import "./assets/css/vue-on-toast.css";
@import "./assets/css/fontawesome.css";
</style>
