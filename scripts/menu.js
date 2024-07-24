import { getCSVContent, makeBlocks } from "../scripts/read_csv.js";
const menuTableHead = document.querySelector('#menu thead');
const menuTableBody = document.querySelector('#menu tbody');
const menuCSVLocation = '../data/menu.csv';

const content = await getCSVContent(menuCSVLocation);

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
    menuTableHead.appendChild(headTR);

    const bodyFrag = document.createDocumentFragment();
    bodyRows.forEach(row=>{
        const bodTR = document.createElement('tr');
        
        const description = document.createElement('p');
        const descriptionCell = document.createElement('td');
        const img = document.createElement('img');
        const imgCell = document.createElement('td');
        const date = document.createElement('p');
        const dateCell = document.createElement('td');

        description.textContent = row[0];
        img.src = `../img/${row[1]}`;
        const leadingZero = /0(?=\d)/g;
        const correctedDate = row[2].replace(leadingZero, '');

        date.textContent = correctedDate;

        descriptionCell.append(description);
        imgCell.append(img);
        dateCell.append(date);
        
        bodTR.append(descriptionCell, imgCell, dateCell);
        bodyFrag.append(bodTR);
    });
    
    menuTableBody.append(bodyFrag);
}