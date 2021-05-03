var $range = document.querySelector('input'),
    $value = document.querySelector('span');

$range.addEventListener('input', function() {
  $value.textContent = this.value;
});