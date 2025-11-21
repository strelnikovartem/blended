function fnA(name, callback) {
  return fnB();
}

function fnB() {
  console.log('hello');
}

fnA('Alice', fnB);
