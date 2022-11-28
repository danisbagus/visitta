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
      url: {
        type: DataTypes.STRING,
      },
      body: {
        type: DataTypes.STRING(100),
      },
      rating: {
        type: DataTypes.TINYINT,
      },
    },
    {
      timestamps: false,
    }
  );

  return Review;
};
