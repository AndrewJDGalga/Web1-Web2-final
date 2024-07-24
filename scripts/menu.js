import { getCSVContent, makeBlocks } from "./utility.js";
const menuTableHead = document.querySelector('#menu thead');
const menuTableBody = document.querySelector('#menu tbody');
const menuCSVLocation = '../data/menu.csv';
const imgLocationPosition = 1;

const content = await getCSVContent(menuCSVLocation);

const createTableCell = (tag, text='', src='') => {
    const cell = document.createElement('td');
    const cellElement = document.createElement(tag);

    if(cellElement.hasAttribute('src')) cellElement.src = src;
    if(text !== "") cellElement.textContent = text;

    cell.appendChild(cellElement);
    return cell;
}

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
            const newCell = (i === imgLocationPosition) ? createTableCell('img', '', arr[i]) : createTableCell('i', arr[i]);
            bodyRow.appendChild(newCell);
        }
        bodyFrag.appendChild(bodyRow);
    });

    menuTableBody.appendChild(bodyFrag);
    
    /*
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
    */
}

