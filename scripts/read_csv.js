export async function getCSVContent(filename) {
    let content = '';
    try {
        const res = await fetch(filename, {
            method: 'get',
            headers: {
                'content-type': 'text/csv;charset=UTF-8'
            }
        });
        
        if(!res.ok) throw new Error(`Response status: ${res.status}`);

        content = await res.text();
    } catch(e) {
        console.log(e.message);
    }
    return content;
}