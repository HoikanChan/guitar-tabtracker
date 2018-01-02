module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {})
  Bookmark.associate = function (model) {
    Bookmark.belongsTo(model.User)
    Bookmark.belongsTo(model.Song)
  }
  return Bookmark
}
