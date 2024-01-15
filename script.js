const addItems = document.querySelector('#add-items');
const list = document.querySelector('.list');
const items = [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const item = {
        text : text,
        done : false
    }
    console.log(item);
    items.push(item);
    populateList(items, list);
    this.reset();
}

function populateList(list = [], listItem){
    listItem.innerHTML = list.map((l, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" />
                <label for="">${l.text}</label>
            </li>
        `;
    }).join('');
}

addItems.addEventListener('submit', addItem);