const arr = [['id1','Hussain'], ['id2', 'Hassan'], ['id1', 'Hussain'],['id3','Zain'], ['id2', 'Ahmed'], ['id1', 'Ahsan']];
const obj = {};

for (const element of arr) {
  const id = element[0];
  if (obj[id]) {
    obj[id]++;
  } else {
    obj[id] = 1;
  }
}
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
