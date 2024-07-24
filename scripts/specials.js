import { getCSVContent, makeBlocks } from "../scripts/read_csv.js";
const specialsClose = document.getElementById('close');
const specialsTableHead = document.querySelector('#specials thead');
const specialsTableBody = document.querySelector('#specials tbody');
const specialsCSVLocation = '../data/specials.csv';

specialsClose.onclick = () => {
    window.close();
}

const content = await getCSVContent(specialsCSVLocation);


if(content !== '') {
    const rows = makeBlocks(content);
    const headRow = rows[0];
    const bodyRows = rows.slice(1);

    const headTR = document.createElement('tr');
    headRow.forEach(item=>{
        const headCol = document.createElement('th');
        headCol.textContent = item;
        headTR.appendChild(headCol);
    })
    specialsTableHead.appendChild(headTR);

    const bodyFrag = document.createDocumentFragment();
    bodyRows.forEach(row=>{
        const bodTR = document.createElement('tr');
        const description = document.createElement('p');
        const img = document.createElement('img');
        const date = document.createElement('time');


    })
    console.log(bodyRows);
}