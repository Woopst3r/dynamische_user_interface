value1 = 0;
value2 = 0;
value3 = 0;
container = document.getElementById('container');

function button_click(event) {
  let nr = event.target.id.replace('button', '');
  container.className = '';
  container.classList.add("click_" + nr);
  this.value = parseInt(this.value) + 1;
  buttons = document.querySelectorAll('input');
  for (button of buttons) {
    button.disabled = false;
  }
  this.disabled = true;
}

document.getElementById('button1').onclick = button_click;
document.getElementById('button2').onclick = button_click;
document.getElementById('button3').onclick = button_click;
