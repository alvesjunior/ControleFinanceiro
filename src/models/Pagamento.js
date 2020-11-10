const {Model, DataTypes} = require('sequelize');

class Pagamento extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            mes: DataTypes.INTEGER,
            data_vencimento: DataTypes.DATE,
            valor: DataTypes.DOUBLE,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Parcelas, {foreignKey: 'conta_id', as: 'parcelas'})
    }

}

module.exports = Pagamento;