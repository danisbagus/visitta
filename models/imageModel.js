export default (sequelize, DataTypes) => {
  let Image = sequelize.define(
    "images",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      spot_id: {
        type: DataTypes.UUID,
      },
      url: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  Image.associate = (models) => {};

  return Image;
};
