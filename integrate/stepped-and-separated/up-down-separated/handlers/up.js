function up() {
  debugger;
  // update state
  numbers.past.push(numbers.current);
  numbers.current += 1;

  // render to user
  document.getElementById('current-number').innerHTML = numbers.current;

  // log action for developers
  const copiedState = deepClone(numbers);
  log.push({
    handler: 'up',
    numbers: copiedState
  });
}

