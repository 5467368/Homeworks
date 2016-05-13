/**
 * Created by Мирослав on 05.05.2016.
 */
define (
    'controller',
    ['jquery', 'tmpl', 'model', 'view'],

    function Controller(model, view) {
        var self = this;
        view.elements.listContainer.on('click', '.item-delete', removeItem);
        view.elements.addBtn.on('click', addItem);
        view.elements.listContainer.on('click', '.item-text', editItem);
        view.elements.listContainer.on('focusout', '.item-edit', function () {
            var inputText = $(this).val();
            if (inputText == '') {
                inputText = $(this).attr('placeholder')
            }
            editFinish(inputText);
        });
        view.elements.listContainer.on('keydown', '.item-edit', function(e) {
            var inputText;
            if (e.which == 13) {
                inputText = $('.item-edit').val();
                editFinish(inputText);
            }
        });
        var editIndex; // Индекс редактируемого элемента
        function editItem() {
            var itIs = $(this);
            editIndex = $(this).attr('data-value');
            // view.hideEdit();
            // view.renderList(model.data);
            view.showEdit(itIs);
        }

        function addItem() {
            var newItem = view.elements.input.val();
            model.addItem(newItem);
            view.renderList(model.data);
            view.elements.input.val('');
        }

        function removeItem() {
            var itemIndex = +$(this).attr('data-value');
            model.removeItem(itemIndex);
            view.renderList(model.data);
        }

        function editFinish(val) {
            model.replaceItem(editIndex, val);
            view.hideEdit();
            view.renderList(model.data);
        }
        
        return self;
    }
);