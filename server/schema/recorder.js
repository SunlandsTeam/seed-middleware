export default (sequelize, DataTypes) => {
  return sequelize.define('fx_site_dot_recorder', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_business_card: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    report_succeed: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    report_result: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    tableName: 'fx_site_dot_recorder'
  })
}
