module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {})
  History.associate = function (model) {
    History.belongsTo(model.User)
    History.belongsTo(model.Song)
  }
  return History
}
