const ab = i => {
  const s = [];
  do {
    s.push(String.fromCharCode(65 + i % 26));
    i = i / 26 | 0;
  } while(i);
  return s.join('');
}

export function makeABGenerator() {
  return function() {
    let id = 0;
    return () => `pane${ab(id++)}`;
  }();
}