const addPage = (elemId="editor") => {
    let totalPages = get("totalPages");
    totalPages++;
    set({value: totalPages, prop: "totalPages"});
    
    return document.getElementById(elemId).innerHTML += `
        <div id="page${totalPages}"  pageNumber="${totalPages}" class="page"></div>
    `;
}

const deletePage = () => {
    let totalPages = get("totalPages");
    if(totalPages == 0) return;

    const page = document.getElementById(`page${totalPages}`);
    page.remove();

    totalPages-=1;
    set({value: totalPages, prop: "totalPages"});
}