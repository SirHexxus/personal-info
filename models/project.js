module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      repoUrl: {
        type: DataTypes.STRING,
        isUrl: true,
        allowNull: false
      },
      deployedUrl: {
        type: DataTypes.STRING,
        isUrl: true,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      created: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
      }
    },
    {}
  );

  /* Project.associate = models => {
    Project.hasMany(models.Post, {
      onDelete: "cascade"
    });
  }; */

  return Project;
};
