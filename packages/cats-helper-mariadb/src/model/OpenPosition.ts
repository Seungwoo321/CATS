import { sequelize, options, DataTypes } from '../util'

export const OpenPosition = sequelize.define('OpenPosition', {
    symbol: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    tradingId: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    direction: {
        type: DataTypes.STRING,
        allowNull: false
    },
    entryTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    entryPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    growth: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    profit: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    profitPct: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    holdingPeriod: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    initialStopPrice: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    curStopPrice: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    profitTarget: {
        type: DataTypes.DOUBLE,
        allowNull: true
    }
}, options)
