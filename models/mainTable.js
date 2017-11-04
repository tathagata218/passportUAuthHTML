module.exports = function(sequelize, DataTypes){
    var user_Stuff = sequelize.define('user_Stuff', {
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
    
    return user_Stuff;
}