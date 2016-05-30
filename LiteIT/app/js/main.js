/**
 * Created by Мирослав on 25.05.2016.
 */
(function () {

  // var notesList = [
  //   {
  //     "text": "Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun  Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun",
  //     "name": "ONE",
  //     "activeColor": "",
  //     "labels": ["Personal", "Job", "Important"],
  //     "activeLabels": [],
  //     "categories": ["Category Personal", "Category Job", "Category Important"],
  //     "activeCategory": [],
  //     "info": 1497490980837
  //   },
  //   {
  //     "text": "Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun  Lorem ipsun Lorem ipsrem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun",
  //     "name": "TWO",
  //     "activeColor": "",
  //     "labels": ["Personal", "Job", "Important"],
  //     "activeLabels": [],
  //     "categories": ["Category Personal", "Category Job", "Category Important"],
  //     "activeCategory": [],
  //     "info": 1498490980837
  //   }
  // ];


  var nList = [];// = JSON.parse(JSON.stringify(notesList));

  var newNote = {
    text: "Текст",
    name: "Название",
    activeColor: "",
    labels: ["Label 1", "Label 2", "Label 3"],
    activeLabels: [],
    categories: ["Category 1", "Category 2", "Category 3"],
    activeCategory: [],
    info: null
  };

  function saveJSON() {
    localStorage.setItem('notesList', JSON.stringify(nList));
  };

  function loadJSON() {
    nList = JSON.parse(localStorage.getItem('notesList'));
  };

  var app = angular.module("notesManager", []);
  app.controller('NotesController', function() {
    var self = this;
    self.notes = nList;

    // Не получается получить данные из json-файла
    // self.notes = [];    //остаётся пустым!!! Почему?
    // $http.get('js/notes.json').success(function(data){
    //   self.notes = data;  //принимает значения data
    //   console.log(self.notes);
    // });

    this.noteManagerInit = function () {
      loadJSON();
      if (!nList) {
        nList = newNote
      }
      self.notes = nList;
    }
  });

  app.controller('AddNewNote', function () {
    this.newNote = newNote;

    this.addNewNote = function () {
      this.newNote.info = Date.now();
      nList.push(this.newNote);
      saveJSON();
      console.log('Add new' + nList);
    }
  });

  app.controller('NameEditorController', function () {
    this.nameEditActive = false;
    this.nameValue = this.name;

    this.editName = function () {
      this.nameEditActive = true;
    };

    this.editNameEnd = function (note) {
      this.nameEditActive = false;
      note.name = this.nameValue;
      saveJSON();
      console.log(nList);
    };
  });

  app.controller('TextEditorController', function () {
    this.textEditActive = false;
    this.textValue = this.name;

    this.editText = function() {
      this.textEditActive = true;
    };

    this.editTextEnd = function (note) {
      this.textEditActive = false;
      note.text = this.textValue;
      saveJSON();
    };
  });

  app.controller('OptionsController', function () {
    this.tooltip = 0;
    this.options = 0;

    // mouseenter event
    this.showTooltip = function (n) {
      this.tooltip = n;
      };

    // mouseleave event
    this.hideTooltip = function () {
      this.tooltip = 0;
    };

    this.showOptions = function (n) {
      this.options = n;
    };

    this.hideOptions = function () {
      this.options = 0;
    };
  });

  app.controller('ColorsController', function () {
    this.setColor = function (item, color) {
      item.activeColor = color;         //Не работает, не перекрашивает физически
      saveJSON();
    };
  });

  app.controller('InfoController', function () {
    this.info = function (item) {
      return item.info;
    };
  });

  app.controller('DeleteController', function () {
    this.deleteNote = function (index) {
      nList.splice(index, 1);
      saveJSON();
    };
  });

})();