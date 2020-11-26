
function moreinfo(x) {
  document.getElementsByClassName('mytextarea').innerHTML = x;
}


function hoverHighlight(x,y) {
  if (document.getElementById(x).classList.contains('hover-Medical-highlight')) {
    document.getElementById(x).style.opacity = y
    if (y == 0.5) {
      y = 0
    }
    document.getElementById(x + "-medical").style.opacity = y
  }
    if (document.getElementById(x).classList.contains('hover-Average-highlight')) {
        document.getElementById(x).style.opacity = y
        if (y == 0.5) {
            y = 0
        }
        document.getElementById(x + "-average").style.opacity = y
    }
  
}
function CompareMedical() {
    document.getElementById("compareOtherButton").style.opacity="0.5"
    document.getElementById("compareMedicalButton").style.opacity="1"
  var list = document.getElementsByClassName("drag-drop");
  for (var x = 0; x < list.length; x++) {
    list[x].style.opacity = "0.5"
    list[x].classList.add('hover-Medical-highlight')
      list[x].classList.remove('hover-Average-highlight')
    list[x].classList.remove('draggable')
  }
}
function CompareOthers() {
    document.getElementById("compareOtherButton").style.opacity="1"
    document.getElementById("compareMedicalButton").style.opacity="0.5"
    var list = document.getElementsByClassName("drag-drop");
    for (var x = 0; x < list.length; x++) {
        list[x].style.opacity = "0.5"
        list[x].classList.add('hover-Average-highlight')
        list[x].classList.remove('hover-Medical-highlight')
        list[x].classList.remove('draggable')
    }
}

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '.drag-drop',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.5,
  
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
        colorID = dropzoneElement.id
        draggableElement.classList.add(String(colorID))
      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target')
      draggableElement.classList.add('can-drop')


    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('can-drop')
      event.relatedTarget.classList.remove(String(colorID))
    },
    ondrop: function (event) {
      
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active')
      event.target.classList.remove('drop-target')
    }
  })
  
  interact('.draggable')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          endOnly: true,
            // restriction: '.dropper-wrapper'
        })
      ],
      autoScroll: false,
      // dragMoveListener from the dragging demo above
      listeners: { move: dragMoveListener }
    })

