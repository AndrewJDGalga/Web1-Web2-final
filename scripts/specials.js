import { getCSVContent, makeBlocks } from "../scripts/read_csv.js";
const specialsClose = document.getElementById('close');
const specialsTable = document.getElementById('specials');
const specialsCSVLocation = '../data/specials.csv';

specialsClose.onclick = () => {
    window.close();
}

const content = await getCSVContent(specialsCSVLocation);

if(content !== '') {
    //const rows = content.split('\r\n');
    //const noHead = rows.slice(1);
    //const noEmpty = rows.filter(line=> line !== ""); //noHead.filter(line=> line !== "");
    const rowByComma = makeBlocks(content); //noEmpty.map(row=> row.split(','));

    console.log(rowByComma);
}