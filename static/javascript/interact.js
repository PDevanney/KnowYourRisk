
var description_dict = {
    'gym': "Training in a commercial gym facility.",
    'mail': "Opening the mail that comes through your letterbox.",
    'camping':'Driving to a campsite and camping outdoors in a tent with people from your household.',
    'library':'Sitting in a library to study/read.',
    'eat-out': 'Going to a restaurant and having dinner.',
    'shopping-trip': 'Going into the city center and visiting several shops.',
    'shaking-hand': 'Shaking a friend’s hand when greeting them.',
    'bar-pub': 'Visiting a bar or a pub and having a night of drinking.',
    'sports-event': 'Attending a large-scale sports event with crowds of people, such as a football match.'
};

var risk_dict = {
    'gym': "Training at a gym can be considered a moderate risk activity. It is a well debated topic during the pandemic, as risk factors such as heavy breathing and being indoors would make it seem like it would be a high-risk environment. However, there is little evidence to show that that cases are high from gyms. A lot of the risk in gyms is limited by strict cleaning procedures and reliance on members sticking to the rules. When training at a gym remember to follow the guidelines, they set out and this can be considered a moderately safe activity that is also very good for physical and mental health.",
    'mail': "This is a low risk activity because there is very little chance of COVID being transmitted through particles left on mail or parcels according to the World Health Organization. It is still advised to wash your hands after handling packages however, as low risk does not equate completely safe.",
    'camping':'This is a low risk activity as it is outdoors and very socially distant from other campers. So long as the restrictions in your area allow travel for recreational purposes then Camping with members of your household is quite a safe activity.',
    'library':'This is a low to moderate risk activity because it is most often a socially distant space with cleaning required to be carried out at study stations after each person has used them. The reason it is nearing towards moderate risk is because public libraries are high traffic indoor spaces and the cleaning is largely self-regulated, meaning that there is a risk of short-term surface contamination. ',
    'eat-out': 'Eating at a restaurant can be either low, medium or high risk depending on whether you are eating in an outdoor space, inside the restaurant, or if the restaurant is a buffet. If you are outdoors and socially distant from other tables then it is a low to moderate risk activity. When indoors the risk increases due to breath particles being more likely to spread through the air to your table as it is circulated. Eating at a buffet raises the risk level to very high as it is very likely that there will be contamination and/or be near others.',
    'shopping-trip': 'Visiting the shops is considered a moderate risk activity because they are often busy indoor spaces with high potential of being nearby someone having the virus. However, with masks and appropriate social distancing this risk can be lowered. ',
    'shaking-hand': 'Shaking someone’s hand is considered a moderate to high risk activity as it is very likely if someone has the virus that they have recently touched their mouth with their hands. This is only not very high risk as it is limited to only one person, so that person would have to have the virus for this to be a risk. Consider if you are meeting others to avoid physical touching as this will limit the possibility of spread. ',
    'bar-pub': 'Having a night out drinking is considered a very high risk activity as not only are you in close proximity with other households with no mask on, you will likely make decisions when under the influence that are not exactly safe when it comes to COVID, such as hugging or talking loudly at others.',
    'sports-event': 'This is considered a very high-risk activity due to the great volumes of people and households mixing. Although outdoors, it is often very difficult to have proper social distancing in place, there is a lot of socializing with others at these events and a lot of singing/shouting that can spread particles containing the virus. Avoid sporting events where possible to limit your risk of catching the virus.'
}

var average_dict = {
        'gym': "'I find the air-con and the sanitary products helps create a safe environment'",
        'mail': "'You are only in contact with one other person very briefly!'",
        'camping':"'If I'm only with people from my household I should be fine",
        'library':"'There is a lot of people going in and out, it could be safer.'",
        'eat-out': "'If we all eat with our household it seems safe.'",
        'shopping-trip': "'There is a lot of exposure to a lot of different people'",
        'shaking-hand': "'A lot of people don't carry hand sanitiser with them'",
        'bar-pub': "'Drinking in a crowded place without a mask does not seem like a good idea to me.'",
        'sports-event': "'There is a lot of people get rowdy and do not wear masks'"
}

function moreinfo(x) {
    document.getElementById('activity-description').classList.add('activity-description-before')
  document.getElementById('activity-description').innerHTML = description_dict[x];
}


function hoverHighlight(x,y) {
    moreinfo(x)
  if (document.getElementById(x).classList.contains('hover-Medical-highlight')) {
      document.getElementById('activity-description').classList.remove('activity-description-before')
      document.getElementById('activity-description').classList.add('activity-description-compare')
      document.getElementById('risk-description').innerHTML = risk_dict[x];
    document.getElementById(x).style.opacity = y
    if (y == 0.5) {
      y = 0
    }
    document.getElementById(x + "-medical").style.opacity = y
  }
    else if (document.getElementById(x).classList.contains('hover-Average-highlight')) {
      document.getElementById('activity-description').classList.remove('activity-description-before')
      document.getElementById('activity-description').classList.add('activity-description-compare')
      document.getElementById('risk-description').innerHTML = average_dict[x];
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

