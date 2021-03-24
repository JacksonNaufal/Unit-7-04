let age = 0
let weekend = 0
// These define the variables and what they mean
document.getElementById('button').addEventListener('click', button)
// These allow the button to function and click
function button () {
  age = document.getElementById('input').value
  weekend = document.getElementById('input2').value
  if ((age < 14 && weekend === 'Sunday') || (age < 14 && weekend === 'Saturday')) {
    document.getElementById('para').innerHTML = (' You may go to the Museum for Free!')
  } else if ((age >= 14 && weekend === 'Sunday') || (age >= 14 && weekend === 'Saturday')) 
    document.getElementById('para').innerHTML = ('Youre to old sorry!') 
}

// Those allow the website to know what to use which is what is inputed into the boxes, there also is if statements that tell you if tyhe number is larger or smaller than 14, than you cant go for free, and if the day is not saturday or sunday you also can not go into the Museum for free