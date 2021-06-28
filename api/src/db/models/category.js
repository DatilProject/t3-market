const Category = (sequelize, type) =>{
  return sequelize.define('category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: type.INTEGER
    },
    name: {
      type: type.STRING
    },
    createdAt: {
      allowNull: true,
      type: type.DATE
    },
    updatedAt: {
      allowNull: true,
      type: type.DATE
    }
  }, {timestamps: true});
}

module.exports = Category; 