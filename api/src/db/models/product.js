const Product = (sequelize, type) =>{
  return sequelize.define('product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: type.INTEGER
    },
    main_code: {
      type: type.STRING
    },
    auxiliary_code: {
      type: type.STRING
    },
    description: {
      type: type.STRING
    },
    name: {
      type: type.STRING
    },
    on_sale: {
      type: type.BOOLEAN
    },
    price: {
      type: type.FLOAT
    },
    stock: {
      type: type.INTEGER
    },
    weight: {
      allowNull: true,
      type: type.FLOAT
    },
    unit: {
      allowNull: true,
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

module.exports = Product; 