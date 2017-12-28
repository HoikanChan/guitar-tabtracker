module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('Bookmark', {
      userId: DataTypes.STRING,
      songId: DataTypes.STRING,
    })
  
    return Bookmark
  }
  