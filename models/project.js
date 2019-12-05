module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    title: {
      type: DataTypes.STRING,
      notNull: true
    },
    description: {
      type: DataTypes.TEXT,
      notNull: true
    },
    repoURL: {
      type: DataTypes.STRING,
      isURL: true
    },
    deployedURL: {
      type: DataTypes.STRING,
      isURL: true
    },
    image: DataTypes.STRING
  });
  return Project;
};
