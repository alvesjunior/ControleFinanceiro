'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('parcelas', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            conta_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {model: 'pagamentos', key: 'id'},
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            valor: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            status_pg: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            }, created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });

    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.dropTable('parcelas');

    }
};
