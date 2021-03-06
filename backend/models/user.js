module.exports = (sequelize, DataTypes ) =>{
    const Users = sequelize.define("Users", {
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Users.asscociate = (models) =>{
        Users.hasMany(models.Post, {
            onDelete: "cascade",
        });
    }

    return Users; 
    
}


