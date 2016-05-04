/**
 * Created by Мирослав on 03.05.2016.
 */
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

function Controller(model, view) {
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
}

$(function () {
    var firstToDoList = ['Do something 1', 'Do something 2', 'Do something 3'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
});