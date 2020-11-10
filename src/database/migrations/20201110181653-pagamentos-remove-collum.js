'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'pagamentos',
            'parcela_id'
        );

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.addColumn(
            'pagamentos',
            'parcela_id',
            Sequelize.INTEGER
        );

    }
};
