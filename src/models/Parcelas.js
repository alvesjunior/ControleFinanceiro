const { Model, DataTypes } = require('sequelize');

class Parcelas extends Model{
    static init(sequelize){
        super.init({
            valor: DataTypes.DOUBLE,
            status_pg: DataTypes.BOOLEAN,
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Pagamento, {foreignKey: 'conta_id', as: 'owner'})
    }

}
module.exports = Parcelas;