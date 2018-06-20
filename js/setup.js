'use strict';
var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALLS_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_COUNT = 4;

var rand = function (elements) {
  return elements[Math.floor(Math.random() * elements.length)];
};

var wizards = [];
for (var i = 0; i < WIZARDS_COUNT; i++) {
  wizards.push({
    name: rand(WIZARD_FIRST_NAMES) + rand(WIZARD_SECOND_NAMES),
    coatColor: rand(WIZARD_COAT_COLORS),
    eyesColor: rand(WIZARD_EYES_COLORS)
  });
}

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

var KEYCODE_ESC = 27;
var KEYCODE_ENTER = 13;
var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var userDialog = document.querySelector('.setup');
var setupClose = userDialog.querySelector('.setup-close');
var setupUserName = userDialog.querySelector('.setup-user-name');
//Не знаю, как сделать, чтобы окно не закрывалось, когда поле в фокусе: setupUserName.onblur не работает

var onPopupEscPress = function (evt) {
  if (evt.keyCode === KEYCODE_ESC) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE_ENTER) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE_ENTER) {
    closePopup();
  }
});

var setupForm = document.querySelector('.setup-wizard-form');
var inputCoatColor = setupForm['coat-color'];
var inputEyesColor = setupForm['eyes-color'];
var inputFireballColor = setupForm['fireball-color'];
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');

var makeColor = function (element, colors, inputElement, isBackground) {
/* Не понимаю, почему при проверке данные отправляются криво.
    if (isBackground) {
    element.style.background = rand(colors);
    inputElement.value = element.style.background;
  }
*/
  element.style.fill = rand(colors);
  inputElement.value = element.style.fill;
};

wizardCoat.addEventListener('click', function () {
  makeColor(wizardCoat, WIZARD_COAT_COLORS, inputCoatColor);
});

wizardEyes.addEventListener('click', function () {
  makeColor(wizardEyes, WIZARD_EYES_COLORS, inputEyesColor);
});

setupFireball.addEventListener('click', function () {
  //makeColor(setupFireball, FIREBALLS_COLORS, inputFireballColor, true);
  setupFireball.style.background = rand(FIREBALLS_COLORS);
  inputFireballColor.value = setupFireball.style.background;
});
