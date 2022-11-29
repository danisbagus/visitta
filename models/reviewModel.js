export default (sequelize, DataTypes) => {
  let Review = sequelize.define(
    "reviews",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
      },
      spot_id: {
        type: DataTypes.UUID,
      },
      body: {
        type: DataTypes.STRING(100),
      },
      rating: {
        type: DataTypes.TINYINT,
      },
      timestamp: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  Review.associate = (models) => {
    Review.belongsTo(models.users, {
      foreignKey: "user_id",
    });
  };

  return Review;
};
