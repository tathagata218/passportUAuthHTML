module.exports = function (sequelize, DataTypes) {
    var stock_Trans = sequelize.define("stock_Trans",{
        companyName : {
            type: DataTypes.STRING(225),
            allownull: false,
            validate: {
                notEmpty: true
            }
        },
        companyTicker : {
            type : DataTypes.STRING(225),
            allownull: false,
            validate : {
                notEmpty: true,
            }

        },
        boughtPrice :{
            type : DataTypes.INTEGER,
            allownull: false,
            validate : {
                notEmpty: true,
            }
        },
        latestPortfolioValue : {
            type : DataTypes.INTEGER,
            allownull: false,
            validate :{
                notEmply: true
            }
        }

    },
    {
        timestamps : false,
        freezeTableName : false
    });

    return stock_Trans;
};