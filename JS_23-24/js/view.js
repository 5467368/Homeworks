/**
 * Created by Мирослав on 05.05.2016.
 */
define(
    'View',
    ['jquery', 'tmpl'],
    function View(model) {
        var self = this;
        self.renderList = function (data) {
            var list = tmpl($('#list-tmpl').html(), {data: data});
            self.elements.listContainer.html(list);
        };

        function init() {
            var wrapper = tmpl($('#wrapper-tmpl').html());
            $('body').append(wrapper);
            self.elements = {
                input: $('.item-value'),
                addBtn: $('.item-add'),
                listContainer: $('.item-list'),
                itemText: $('.item-text'),
                itemEdit: $('.item-edit')
            };
            self.renderList(model.data);
        }

        self.showEdit = function (elem) {
            var editInput = '<input type="text" class="item-edit" placeholder="' + elem.html() + '" autofocus>';
            elem.replaceWith(editInput);
        };

        self.hideEdit = function () {
            $('.item-edit').remove();
        };
        init();
    }
);