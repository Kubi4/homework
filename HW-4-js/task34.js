const table = document.createElement('table');

for (let i = 0; i <= 10; i++){
  const row = document.createElement('tr');
  for (let j = 0; j <= 10; j++){
    const col = document.createElement('td');
    let val = i * j;
    if (val === 0) {
      val = i || j;
      val = val ? val : '';
    }
    col.innerText = val;
    row.appendChild(col);
  }
  table.appendChild(row);
}

document.body.appendChild(table);


let currentElem = null;
table.onmouseover = function(event) {
  if (currentElem) return;
  let target = event.target.closest('td');
  if (!target) return;
  if (!table.contains(target)) return;
  currentElem = target;
  target.style.background = 'pink';
};

table.onmouseout = function(event) {
  if (!currentElem) return;
  let relatedTarget = event.relatedTarget;
  while (relatedTarget) {
    if (relatedTarget == currentElem) return;
    relatedTarget = relatedTarget.parentNode;
  }
  currentElem.style.background = '';
  currentElem = null;
};

