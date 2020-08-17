<template>
  <div>
    <Header />
   
      <div id="wrapper">
        <div id="content-wrapper">
          <transition name="slide-fade">
          <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
</template>
<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  }
};
</script>