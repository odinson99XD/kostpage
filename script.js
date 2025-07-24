const defaultItems = [
  'Baju', 'Celana', 'Sabun', 'Sikat Gigi', 'Handuk',
  'Charger', 'Alat Tulis', 'Sendal', 'Sepatu', 'Jas Hujan'
];

let items = [];

function renderItems() {
  const list = document.getElementById('itemList');
  list.innerHTML = '';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = `flex justify-between items-center p-3 rounded bg-gray-800 border ${item.checked ? 'border-green-500' : 'border-gray-700'}`;
    
    const label = document.createElement('label');
    label.className = 'flex items-center gap-2';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.checked;
    checkbox.onchange = () => toggleCheck(index);

    const span = document.createElement('span');
    span.textContent = item.name;
    if (item.checked) span.classList.add('line-through', 'text-green-400');

    label.appendChild(checkbox);
    label.appendChild(span);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Hapus';
    removeBtn.className = 'text-red-400 hover:text-red-600';
    removeBtn.onclick = () => removeItem(index);

    li.appendChild(label);
    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

function toggleCheck(index) {
  items[index].checked = !items[index].checked;
  renderItems();
}

function addItem() {
  const input = document.getElementById('itemInput');
  const value = input.value.trim();
  if (value) {
    items.push({ name: value, checked: false });
    input.value = '';
    renderItems();
  }
}

function removeItem(index) {
  items.splice(index, 1);
  renderItems();
}

function resetItems() {
  items = items.map(item => ({ ...item, checked: false }));
  renderItems();
}

window.onload = () => {
  items = defaultItems.map(name => ({ name, checked: false }));
  renderItems();
};
