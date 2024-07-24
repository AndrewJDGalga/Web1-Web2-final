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

    for(let i = 0; i < bodyRows.length; i++) {
        bodyRows[i].forEach(elem=>{

        })
    }
}

orderForm.onsubmit = (e) => {
    e.preventDefault();

    alert('Clicked');
}