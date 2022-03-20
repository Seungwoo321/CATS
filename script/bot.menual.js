
'use strict'
require('../src/config')
const { trading } = require('../src/lib/trade/bitmex')
const dataForge = require('data-forge')
const { Influx2 } = require('../src/lib/influx2')
const strategy = require('../strategy')
const args = process.argv.slice()
args.shift()
args.shift()

; (async function bot () {
    const symbol = args[0]
    const timeframe = args[1]
    const strategyName = args[2]
    const measurement = `${symbol}_${timeframe}`

    try {
        const db = new Influx2()
        const candles = await db.fetchCandles('candles', measurement, symbol, { start: '-30d' })
        // console.table(candles)
        const inputSeries = new dataForge.DataFrame(candles).setIndex('time')
        await trading(symbol, strategy[strategyName], inputSeries)
    } catch (error) {
        console.error(error)
        console.log('\\nFinished ERROR')
    }
})()
