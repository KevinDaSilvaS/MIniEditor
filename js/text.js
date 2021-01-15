const textOptions = {
    TITLE: {
        tag: 'h1',
        classes: ['title', 'text'],
    }
}

const alignOptions = ['CENTER', 'END', 'JUSTIFY', 'LEFT', 'RIGHT', 'START'];

const fontOptions = ['SYSTEM-UI', 'AUTO', 'CURSIVE', 'FANTASY', 'SANS-SERIF'];

addTextNode = (textOption, pageNumber) => {
    if(!pageNumber) pageNumber = get("totalPages");

    const textBase = textOptions[textOption];

    document.getElementById(`page${pageNumber}`).innerHTML += `
        <div>
            <div id="${generateId('DIV')}" ondblclick="editTextNode(this.id, ${generateId(textOption)})">
                <${textBase.tag} 
                id="${generateId(textOption)}" 
                class="${textBase.classes.reduce((all,c) => all + ' ' + c)}"
                style="">
                Lorem ipsum
                </${textBase.tag}>
            </div>
            <div id="F${generateId(textOption)}" onclick="changeFont(this)" currIndex=0 class="elem-action">
                <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" 
                transform="translate(1 4)"><path d="m3.5 3.165h9"/><path d="m4.48122025 6.20339509 
                1-.01878307c.55218735-.01037177 1.00823163.42885655 
                1.01860339.9810439.00011757.00625923.00017636.01251942.00017636.01877975v.98327989c0 
                .54496455-.4363518.98958934-.98122025.99982364l-1 .01878306c-.55218735.01037177-1.00823163-.42885654-1.01860339-.98104389-.00011757-.00625923-.00017636-.01251942-.00017636-.01877975v-.98327989c0-.54496455.4363518-.98958935.98122025-.99982364z"/><path d="m2.5.1507576h11c1.1045695 0 2 .8954305 
                2 2v10.0147186h-13c-1.1045695 0-2-.8954305-2-2v-8.0147186c0-1.1045695.8954305-2 2-2z"/><path d="m8.5 6.165h4"/><path d="m8.5 9.165h4"/><path d="m15 12.1654762c1.3807119 0 2.5-1.1192881 2.5-2.49999998v-6.5h-2"/></g></svg>
            </div>
            
            <div id="A${generateId(textOption)}" onclick="changeAlign(this)" currIndex=0 class="elem-action">
                <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" 
                transform="translate(2 2)"><path d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z"/>
                <path d="m.5 4.5h16"/><path d="m8.5 4.5v12"/></g></svg>
            </div>

            
        </div>
    `;
}

changeFont = (elem) => {
    const idTextNode = elem.id.slice(1)

    const currentIndex = elem.getAttribute("currIndex");

    let newIndex = parseInt(currentIndex)+1;
    if(newIndex >= fontOptions.length) newIndex = 0;

    const textNode = document.getElementById(idTextNode);
    textNode.classList.remove(fontOptions[currentIndex]);
    elem.setAttribute("currIndex", newIndex);

    textNode.classList.add(fontOptions[newIndex]);
}

changeAlign = (elem) => {
    const idTextNode = elem.id.slice(1)

    const currentIndex = elem.getAttribute("currIndex");

    let newIndex = parseInt(currentIndex)+1;
    if(newIndex >= alignOptions.length) newIndex = 0;

    const textNode = document.getElementById(idTextNode);
    textNode.classList.remove(alignOptions[currentIndex]);
    elem.setAttribute("currIndex", newIndex);

    textNode.classList.add(alignOptions[newIndex]);
}

saveTextNodeContent = (contentId, textElementId) => {

    textArea = document.getElementById(`UPDATE${contentId}`);
    const content = textArea.value;

    textElement = document.getElementById(`${textElementId}`);
    textElement.style.display = 'block';
    textElement.innerHTML = content;

    const nodeEditing = document.getElementById(`EDIT${contentId}`);
    nodeEditing.remove();
}

editTextNode = (textId, contentElement) => {
    const element = document.getElementById(textId);
    contentElement.style.display = 'none'; 

    element.innerHTML += `
    <div id="EDIT${textId}">
        <textarea id="UPDATE${textId}" class="edit-area">
        At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
        </textarea>
        <a class="edit-btn" onclick="saveTextNodeContent('${textId}', '${contentElement.id}')">
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" 
            transform="translate(2 3)"><path d="m9.5.5h-7c-1.1045695 0-2 .8954305-2 2v7c0 
            1.1045695.8954305 2 2 2h7c1.1045695 0 2-.8954305 2-2v-7c0-1.1045695-.8954305-2-2-2z" 
            transform="matrix(0 1 -1 0 12 0)"/><path d="m11.5 15.5h2c1.1045695 0 
            2-.8954305 2-2v-7c0-1.1045695-.8954305-2-2-2h-7c-1.1045695 0-2 .8954305-2 2v2" 
            transform="matrix(0 1 -1 0 20 0)"/></g></svg>
        </a>
    </id>
    `
}