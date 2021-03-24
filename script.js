let age = 0 
let weekend = 0
document.getElementById('button').addEventListener('click', button)

function button () {
  age = document.getElementById('input').value
  weekend = document.getElementById('input2').value
  if ((age < 14 && weekend === 'Sunday') || (age < 14 && weekend === 'Saturday')){
    document.getElementById('para').innerHTML = (' You may go to the Museum for Free!')
  } else if ((age >= 14 && weekend === 'Sunday') || (age >= 14 && weekend === 'Saturday')){
    document.getElementById('para').innerHTML = ('Youre to old sorry!')
  }  
}
