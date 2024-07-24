import { getCSVContent, makeBlocks, createTableCell } from "./utility.js";
const orderForm = document.getElementById('order-form');
const orderCSVLocation = '../data/online_items.csv';

const content = await getCSVContent(orderCSVLocation);

/*
<fieldset>
    <legend>Pint of Butterscotch</legend>
    <label for="butterscotchCount">Count</label>
    <input id="butterscotchCount" type="number" min="0" max="50">
    <button type="button">Add to Cart</button>
</fieldset>
*/

if(content != ''){
    const rows = makeBlocks(content);
    const bodyRows = rows.slice(1);
    const formFrag = document.createDocumentFragment();

    for(let i = 0; i < bodyRows.length; i++) {
        const field = document.createElement('fieldset');

        const legend = document.createElement('legend');
        legend.textContent = bodyRows[i][0];
        field.append(legend);

        const price = document.createElement('p');
        price.textContent = 'Price: ' + bodyRows[i][1];
        field.append(price);

        const amt = document.createElement('input');
        amt.type = 'number';
        const forRef = bodyRows[i][0].toLowerCase().replaceAll(' ', '');
        amt.id = forRef;
        amt.dataset.price = parseInt(bodyRows[i][1].replace('$',''));
        amt.min='0';
        amt.max=`${bodyRows[i][2]}`;
        amt.value = '0';
        const amtLabel = document.createElement('label');
        amtLabel.for = forRef;
        amtLabel.textContent = `Order? (less than ${bodyRows[i][2]}): `;
        field.append(amtLabel, amt);
        
        formFrag.append(field);
    }

    orderForm.append(formFrag);
}

orderForm.onsubmit = (e) => {
    e.preventDefault();

    alert('Clicked');
}