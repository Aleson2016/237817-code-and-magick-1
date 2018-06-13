'use strict';
var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var rand = function (elements) {
  var element = elements[Math.floor(Math.random() * elements.length)];
  return element;
};

var wizards = [
  {
    name: rand(WIZARD_FIRST_NAMES) + rand(WIZARD_SECOND_NAMES),
    coatColor: rand(WIZARD_COAT_COLORS),
    eyesColor: rand(WIZARD_EYES_COLORS)
  },
  {
    name: rand(WIZARD_FIRST_NAMES) + rand(WIZARD_SECOND_NAMES),
    coatColor: rand(WIZARD_COAT_COLORS),
    eyesColor: rand(WIZARD_EYES_COLORS)
  },
  {
    name: rand(WIZARD_FIRST_NAMES) + rand(WIZARD_SECOND_NAMES),
    coatColor: rand(WIZARD_COAT_COLORS),
    eyesColor: rand(WIZARD_EYES_COLORS)
  },
  {
    name: rand(WIZARD_FIRST_NAMES) + rand(WIZARD_SECOND_NAMES),
    coatColor: rand(WIZARD_COAT_COLORS),
    eyesColor: rand(WIZARD_EYES_COLORS)
  },
];

var similarList = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
