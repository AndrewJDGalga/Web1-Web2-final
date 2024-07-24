import { getCSVContent, makeBlocks, createTableCell } from "./utility.js";
const specialsClose = document.getElementById('close');
const specialsTableHead = document.querySelector('#specials thead');
const specialsTableBody = document.querySelector('#specials tbody');
const specialsCSVLocation = '../data/specials.csv';
const imgLocationPosition = 1;

specialsClose.onclick = () => {
    window.close();
}

const content = await getCSVContent(specialsCSVLocation);

if(content !== '') {
    const rows = makeBlocks(content);
    const headRowSrc = rows[0];
    const bodyRows = rows.slice(1);
    const bodyFrag = document.createDocumentFragment();

    const headRow = document.createElement('tr');

    headRowSrc.forEach(element => {
        const newCell = createTableCell('p', element);
        headRow.appendChild(newCell);
    });

    specialsTableHead.append(headRow);
    
    bodyRows.forEach(arr=>{
        const bodyRow = document.createElement('tr');
        for(let i = 0; i < arr.length; i++){
            const newCell = (i === imgLocationPosition) ? createTableCell('img', '', arr[i]) : createTableCell('p', arr[i]);
            bodyRow.appendChild(newCell);
        }
        bodyFrag.appendChild(bodyRow);
    });

    specialsTableBody.appendChild(bodyFrag);
}