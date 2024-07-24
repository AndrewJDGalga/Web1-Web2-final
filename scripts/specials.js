import { getCSVContent } from "../scripts/read_csv.js";
const specialsClose = document.getElementById('close');
const specialsTable = document.getElementById('specials');
const specialsCSVLocation = '../data/specials.csv';

specialsClose.onclick = () => {
    window.close();
}

const content = await getCSVContent(specialsCSVLocation);
console.log(content);