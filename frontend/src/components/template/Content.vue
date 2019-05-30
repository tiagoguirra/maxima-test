<template>
  <div class="content">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style>
.section-header {
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--default-blue);
  color: #fff;
  padding: 50px 0;
  text-align: center;
}
.over-top {
  margin-top: -60px;
}
.content{
  min-height: 100vh;
  padding-bottom: 30px;
}
</style>
