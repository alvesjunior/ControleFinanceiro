const { Model, DataTypes } = require('sequelize');

class Receita extends Model{
    static init(sequelize){
        super.init({
            descricao: DataTypes.STRING,
            valor: DataTypes.DOUBLE,
            status_pg: DataTypes.BOOLEAN,
            mes_referencia: DataTypes.INTEGER,
        },{
            sequelize,
            tableName: 'receitas'
        })
    }
    static associate(models){
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'owner'})
    }

}
module.exports = Receita;