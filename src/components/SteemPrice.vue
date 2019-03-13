<template>
  <div>
    <h4>Steem Price</h4>

    <div class="row" v-for="p in prices.split('/')" :key="p">
      <div class="col-sm-12">
        {{p}}
      </div>
    </div>

  </div>
</template>

<script>
let axios = require('axios')

export default {
  name: 'SteemPrice',
  data () {
    return {
      prices: ''
    }
  },
  mounted () {
    let priceComponent = this

    // Make poloniex REST API call
    axios.get('https://poloniex.com/public?command=returnTicker')
      .then(function (response) {
        for (let p in response['data']) {
          if (p.endsWith('_STEEM') || p.endsWith('_SBD')) { // Only interested in STEEM price pairs
            priceComponent.prices = priceComponent.prices + p + ': ' + response['data'][p]['last'] + '/'
          }
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log(this.prices)
  }
}
</script>

<style scoped>
</style>
