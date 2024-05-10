
<template>
  <h1>hello {{ user.name }}</h1>
  <p>your Balance:{{ user.balance }}</p>
  <p>Bitcoin Rate: {{ bitcoinRate }}</p>
  <button @click="getMoney">Update Bitcoin Rate</button>
</template>

<script>
import { userService } from "../services/user.service.js";
import { bitcoinService } from "../services/bitcoin.service.js";

export default {
  data() {
    return {
      user: {},
      bitcoinRate: null,
    };
  },
  async created() {
    this.user = userService.getUser();
  },

  methods: {
    async updateBitcoinRate() {
      const rate = await bitcoinService.getRate(this.user.balance);
      this.bitcoinRate = rate;
    },

    async getMoney() {
      await this.updateBitcoinRate();
    },
  },
};
</script>