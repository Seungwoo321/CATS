import { Overlay } from 'trading-vue-js'
export default {
  name: 'SMA',
  mixins: [
    Overlay
  ],
  computed: {
    color () {
      return '#f5a30c'
    },
    line_width () {
      return 2
    }
  },
  methods: {
    meta_info () {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Simple Moving Average'
      }
    },
    use_for () {
      return ['SMA']
    },
    calc () {
      return {
        props: {
          length: {
            def: 25,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: `
          return sma(close, length)[0]
        `
      }
    }
  }
}
