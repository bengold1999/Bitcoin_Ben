
<template>
  <h1>hello {{ user.name }}</h1>
  <p>your Balance:{{ user.balance }}</p>
  
</template>

<script>
import { userService } from "../services/user.service.js";

export default {
  data() {
    return {
      user: "",
    };
  },
  async created() {
    this.user = userService.getUser();
  },
};
</script>