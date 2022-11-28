export default (sequelize, DataTypes) => {
  let Spot = sequelize.define(
    "spots",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      timestamp: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  Spot.associate = (models) => {
    Spot.belongsTo(models.users, {
      foreignKey: "user_id",
    });

    Spot.hasMany(models.images, {
      foreignKey: "spot_id",
    });

    Spot.hasMany(models.reviews, {
      foreignKey: "spot_id",
    });
  };

  return Spot;
};
