
var items = document.querySelectorAll('.cursors li');

function handleClick() {
  /*
    Copy to clipboard
  */
  var clipboardInput = document.querySelector('[name="clipboard"]');
  clipboardInput.value = this.dataset.css;
  clipboardInput.select();
  document.execCommand('copy');

  this.classList.add('copied');
  setTimeout(()=>this.classList.add('copied-active'))
  this.addEventListener('transitionend', ()=> {
    this.classList.remove('copied','copied-active');
  });
}

Array.from(items).forEach(item => item.addEventListener('click', handleClick));
