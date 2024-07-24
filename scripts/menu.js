import { getCSVContent, makeBlocks, createTableCell } from "./utility.js";
const menuTableHead = document.querySelector('#menu thead');
const menuTableBody = document.querySelector('#menu tbody');
const menuCSVLocation = '../data/menu.csv';
const imgLocationPosition = 1;

const content = await getCSVContent(menuCSVLocation);

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

    menuTableHead.append(headRow);
    
    bodyRows.forEach(arr=>{
        const bodyRow = document.createElement('tr');
        for(let i = 0; i < arr.length; i++){
            const newCell = (i === imgLocationPosition) ? createTableCell('img', '', arr[i]) : createTableCell('p', arr[i]);
            bodyRow.appendChild(newCell);
        }
        bodyFrag.appendChild(bodyRow);
    });

    menuTableBody.appendChild(bodyFrag);
}

