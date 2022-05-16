module.exports = (sequelize, DataTypes ) =>{
    const Post = sequelize.define("Post", {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        member:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Post; 
    
}


