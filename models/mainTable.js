module.exports = function(sequelize, DataTypes){
    var user_Info = sequelize.define('user_Info', {
        userName : {
            type : DataTypes.STRING(225),
            allowNull : false,
            unique : true, 
            // validate: {notEmpty: true}
        },
        password : {
            type : DataTypes.STRING(225),
            allowNull: false,
            // validate: {notEmpty: true} 
        },
        
    },{
        timestamps : false,
        freezeTableName : false
    });
    return user_Info;
}