$(document).ready(function () {
// view_flats -> add_foto
// viewFlatsBtn
  var modal = $('.modal');
  var modalCloseBtn = $('.modal__close_btn');
  var viewAddFoto = $('.add_foto');

  //при клике на modal__close_btn модальное окно закрывается
  modalCloseBtn.on("click", toggleModal);

  //при клике на кнопку "add_foto" открывается модальное окно
  viewAddFoto.on("click", toggleModal);

  function toggleModal() {
    modal.toggleClass("modal__is_open");
  };

  var _validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];

});

function Validate(oForm) {
  var arrInputs = oForm.getElementsByTagName("input");
  for (var i = 0; i < arrInputs.length; i++) {
  var oInput = arrInputs[i];
  if (oInput.type == "file") {
  var sFileName = oInput.value;
  if (sFileName.length > 0) {
  var blnValid = false;
  for (var j = 0; j < _validFileExtensions.length; j++) {
  var sCurExtension = _validFileExtensions[j];
  if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
  blnValid = true;
  break;
  }
  }
  
  if (!blnValid) {
  alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
  return false;
  }
  }
  }
  }
  
  return true;
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);

  function handleFileSelect(evt) {
    var image = document.getElementById('files');

    if(image != null)
        image.remove();

    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.

    var f = files[0];

    // Only process image files.
    if (!f.type.match('image.*')) {
        alert("Вы вставили не фотографию:(")
        return;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
        return function(e) {
            // Render thumbnail.
            var div = document.createElement('div');
            div.innerHTML = ['<img class="thumb" id = "image" src="', e.target.result,
                '" title="', theFile.name, '"/>'].join('');
            document.getElementById('list').insertBefore(div, null);
        };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
}

