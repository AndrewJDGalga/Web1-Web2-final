import { getCSVContent, makeBlocks } from "../scripts/read_csv.js";
const specialsClose = document.getElementById('close');
const specialsTableHead = document.querySelector('#specials thead');
const specialsTableBody = document.querySelector('#specials tbody');
const specialsCSVLocation = '../data/specials.csv';

specialsClose.onclick = () => {
    window.close();
}

const content = await getCSVContent(specialsCSVLocation);

const setText = (txt) => {
    document.createElement('p');

}

if(content !== '') {
    const rows = makeBlocks(content);

    const frag = document.createDocumentFragment();

    rows.forEach(item => {
        
    });
    console.log(rows);
}