export default (sequelize, DataTypes) => {
  return sequelize.define('fx_wx_user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    openid: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    unionid: {
      type: DataTypes.STRING(32),
      defaultValue: true
    },
    nickname: {
      type: DataTypes.STRING(64),
      defaultValue: ''
    },
    username: {
      type: DataTypes.STRING(64),
      defaultValue: ''
    },
    avatar: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: ''
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ''
    },
    introducer_phone: {
      type: DataTypes.STRING(11),
      defaultValue: ''
    },
    introducer_first_decode: {
      type: DataTypes.INTEGER(1),
      defaultValue: 0
    },
    introduced_phone: {
      type: DataTypes.STRING(11),
      defaultValue: ''
    },
    introduced_first_decode: {
      type: DataTypes.INTEGER(1),
      defaultValue: 0
    },
    adviser_id: {
      type: DataTypes.INTEGER(11),
      defaultValue: null
    },
    total_score: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    last_login_time: {
      type: DataTypes.STRING(50),
      defaultValue: '1000-01-01 00:00:00',
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      defaultValue: '1000-01-01 00:00:00',
      allowNull: false
    }
  }, {
    tableName: 'fx_wx_user'
  })
}
