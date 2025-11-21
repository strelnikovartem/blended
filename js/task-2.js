function fnA(name, callback) {
  callback(name);
}

function fnB(a) {
  console.log(`hello ${a}`);
}

fnA('Alice', fnB);
