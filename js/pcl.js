function OpenComForm(ComTwo, ComOld, clAct){

    var cOld = document.getElementById(ComOld);
    var cTwo = document.getElementById(ComTwo);

    cOld.classList.add('display_none');
    cTwo.classList.add(clAct); //modal__foto_right_my_comment_write_active , 'modal__foto_right_my_comment_write_active'
  }
  // ЗАКРЫВАЕМ ФОРМУ С НАПИСАНИЕМ КОМЕНТА
  function CloseComForm(ComTwo, ComOld, clAct){
    var cOld = document.getElementById(ComOld);
    var cTwo = document.getElementById(ComTwo);
    cOld.classList.remove('display_none')
    cTwo.classList.remove(clAct)
  }

  //суицид
  function DeleteCom(c){
    var child = document.getElementById(c);
    child.remove();
  }

  // МЕНЯЕМ ЦВЕТ СЕРДЕЧКАМ
function LikePlus(one, two, num){

  document.getElementById(two).classList.remove('heart_none');
  document.getElementById(one).classList.add('heart_none');

  var number = parseInt(document.getElementById(num).innerHTML);
  number++;
  document.getElementById(num).innerHTML = number;

  }

  function LikeMinus(one, two, num){
  document.getElementById(one).classList.remove('heart_none');
  document.getElementById(two).classList.add('heart_none');

  var number = parseInt(document.getElementById(num).innerHTML);
  number--;
  document.getElementById(num).innerHTML = number;
  }

  // ОТКРЫВАЕМ И ЗАКРЫВАЕМ РЕПОСТЫ

function ShowReps(id){
  var reps = document.getElementById(id);
  reps.classList.toggle('circle__tooltop_active');
  }

  function fun__but(element) {

    var text = document.getElementById(element); //"postadd"
    if (text.style.display === "none") {
        text.style.display = "block";
    }
    else {
        text.style.display = "none";
    }
}

init();

// function fun__but(element) {

//     var text = document.getElementById(element); //"postadd"
//     if (text.style.display === "none") {
//         text.style.display = "block";
//     }
//     else {
//         text.style.display = "none";
//     }
// }

function init(){
    var elements = document.getElementsByClassName('jsrepost');

    for(var i = 0; i < elements.length; i++)
        elements[i].style.display = "none";
}

function repost(element){
    var text = document.getElementById(element); //"postadd"

    var pidaras_display = text.style.display;

    if (text.style.display == "none") {
        text.style.display = "block";
    }
    else {
        text.style.display = "none";
    }

    var newStyle = document.getElementById(element).style.display;

    var elements = document.getElementsByClassName('jsrepost');

    for(var i = 0; i < elements.length; i++)
    {
        var textid = text.id;
        var elId = elements[i].id;
        if(textid != elId){
            var elStyle = elements[i].style.display;
            if (elements[i].style.display == "block") {
                elements[i].style.display = "none";
            }
        }
    }

    var oldStyle = document.getElementById(element).style.display;

}


// //ОТКРЫВАЕМ ФОРМУ С НАПИСАНИЕМ КОМЕНТА
// function OpenComFormN(ComTwo, ComOld){

//     var cOld = document.getElementById(ComOld);
//     var cTwo = document.getElementById(ComTwo);
    
//     cOld.classList.add('display_none');
//     cTwo.classList.add('news_modal__foto_right_my_comment_write_active');
//     }

//     // ЗАКРЫВАЕМ ФОРМУ С НАПИСАНИЕМ КОМЕНТА
//     function CloseComFormN(ComTwo, ComOld){
//     var cOld = document.getElementById(ComOld);
//     var cTwo = document.getElementById(ComTwo);
//     cOld.classList.remove('display_none');
//     cTwo.classList.remove('news_modal__foto_right_my_comment_write_active');
//     }
