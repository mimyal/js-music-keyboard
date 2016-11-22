// @TODO Did not get to clearing the latest noteId so if an invalid note is typed the last note played will be played again


$(document).ready( function() {
  $('body').on('keydown', function(event) {
    var noteId = selectNote(event.key);
    return doReMi(noteId);
  });

  $('.note').on('click', function() {
    var noteId = selectNote($(this).html());
    return doReMi(noteId);
  });
});

var doReMi = function(input) {
  var noteId = input;
  $(noteId)[0].load();
  $(noteId)[0].play();
  // noteId = null;
};

var selectNote = function(note) {
  return '#' + note + 'Audio';
};


// var selectNote = function(note) {
//   switch(note) {
//     case 'c':
//       return noteId = '#cAudio';
//     case 'd':
//       return noteId = '#dAudio';
//     case 'e':
//       return noteId = '#eAudio';
//     case 'f':
//       return noteId = '#fAudio';
//     case 'g':
//       return noteId = '#gAudio';
//     case 'a':
//       return noteId = '#aAudio';
//     case 'b':
//       return noteId = '#bAudio';
//     default:
//       // noteId = undefined;
//       break;
//   }
// };

// var selectNote = function(note) {
//   var noteIds = {
//     'c': '#cAudio',
//     'd': '#dAudio',
//     'e': '#eAudio',
//     'f': '#fAudio',
//     'g': '#gAudio',
//     'a': '#aAudio',
//     'b': '#bAudio'
//   };
//   return noteIds[note];
// };
