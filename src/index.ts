export const DropDrap = () => {
    let container: any;
    let count: any = '1';
    let keep: any;

    const createContainer = (className: string) => {
        container = document.createElement('div');
        container.classList.add(className);
        container.isDragItem;
        container.indexOfKeep;

        const getIndexOf = (elm: any) => {
            let i = 0;
            while ((elm = elm.previousSibling) != null)
                i++;
            return i;                
        }

        const insertAfter = (newNode:any, referenceNode:any) => {            
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
        const containerOnDrop = (ev: any) => {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
            keep.style.opacity = '1';
        }
        const containerOnDragOver = (ev: any) => {
            ev.preventDefault();
            if (!container.isDragItem) {
                container.appendChild(keep);
            }
        }
        container.ondrop = containerOnDrop;
        container.ondragover = containerOnDragOver;

        container.addItem = (className: string) => {
            let item = document.createElement('div');
            item.classList.add(className);
            item.setAttribute("id", count);
            item.setAttribute("draggable", "true");
            item.innerHTML = count;

            const itemOndrop = (ev: any) => {
                ev.stopPropagation();
                keep.style.opacity = '1';
                let id = ev.dataTransfer!.getData("text");
                let keepElm = document.getElementById(id);
                container.insertBefore(keepElm, ev.target);
            }

            const itemOnDragOver = (ev:any) => {
                keep.style.opacity = '0.5';
                container.isDragItem = true;                                
                if(container.indexOfKeep > getIndexOf(ev.target)){
                    container.insertBefore(keep, ev.target)     
                    container.indexOfKeep = getIndexOf(ev.target);
                }else if(container.indexOfKeep < getIndexOf(ev.target)){
                    insertAfter(keep, ev.target);
                    container.indexOfKeep = getIndexOf(ev.target);
                }
            }

            const itemOnDragLeave = (ev: any) => {
                container.isDragItem = false;                
            }
            const itemOnDragStart = (ev: any) => {
                ev.dataTransfer.setData("text", ev.target.id);
                keep = item;
                container.indexOfKeep = getIndexOf(item);
            }

            item.ondrop = itemOndrop;          
            item.ondragover = itemOnDragOver;
            item.ondragleave = itemOnDragLeave;
            item.ondragstart = itemOnDragStart;

            container.appendChild(item);
            count++;
        }
        return container;
    }
    return {
        createContainer
    }
}