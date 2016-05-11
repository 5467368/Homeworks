/**
 * Created by Мирослав on 05.05.2016.
 */
define (
    'Model',
    ['jquery'],

    function Model(data) {
        var self = this;
        self.data = data;
        var edited;

        self.addItem = function (item) {
            if (item.length === 0){
                return;
            }
            self.data.push(item);
            return self.data;
        };

        self.removeItem = function (itemIndex) {
            var index = itemIndex;

            if (index === -1){
                return;
            }
            self.data.splice(index, 1);
            return self.data;
        };

        self.replaceItem = function (index, val) {
            // var index = self.data.indexOf(item);
            self.data.splice(index, 1, val);
            return self.data;
        };
    }
);