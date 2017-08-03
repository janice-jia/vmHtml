<template>
  <div class="register">
    <router-view></router-view>
    <!--<RegisterSteps1 v-on:registerStep1Data="setData" v-show="this.$route.path === '/register' || this.$route.path === '/register/steps/1'"></RegisterSteps1>-->
    <!--<RegisterSteps2 :aa="step" v-show="this.$route.path === '/register/steps/2'"></RegisterSteps2>-->
  </div>
</template>
