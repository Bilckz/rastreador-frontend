<template>
  <router-view></router-view>
</template>

<script>
import { routes } from './routes';

export default {
  name: 'App',
  data() {

    return {

      routes
    }
  }
};
</script>
