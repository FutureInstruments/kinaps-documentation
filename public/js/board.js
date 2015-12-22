'use strict';

define(function (require) {
    function BoardView(connection) {
        this.connection = connection;

        this.element = document.createElement('div');
        this.element.className = 'kinaps-board';
        this.update();

        var self = this;

        connection.on('client-changed', function () {
            self.update();
        });

        connection.on('data-synced', function () {
            self.update();
        });
    }

    BoardView.prototype.getElement = function () {
        return this.element;
    };

    BoardView.prototype.update = function () {
        this.element.innerHTML = "Comming soon!";
    };

    return BoardView;
});
