// module.exports = (sequelize, DataTypes) => {
//   const Post = sequelize.define(
//     "Post",
//     {
//       title: {
//         type: DataTypes.STRING
//       },
//       body: {
//         type: DataTypes.TEXT,
//         allowNull: false
//       }
//     },
//     {}
//   );

//   Post.associate = models => {
//     Post.belongsTo(models.User, {
//       authorId: {
//         allowNull: false
//       }
//     });
//   };

//   return Post;
// };
