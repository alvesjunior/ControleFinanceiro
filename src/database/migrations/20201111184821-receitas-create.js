'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('receitas', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {model: 'users', key: 'id'},
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            descricao: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            valor:{
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            status_pg: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            mes_referencia:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },


    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(
            'receitas'
        );
    }
};
