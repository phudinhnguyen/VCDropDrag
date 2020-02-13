const createContainer = (container: any) => {
    let count: any = '1';
    let keep: any;

    container.isDragItem;
    container.indexOfKeep;

    const getIndexOf = (elm: any) => {
        let i = 0;
        while ((elm = elm.previousSibling) != null)
            i++;
        return i;
    }
    const containerOnDrop = (ev: any) => {
        ev.preventDefault();
        ev.target.appendChild(keep);
        keep.style.opacity = '1';
    }
    const containerOnDragOver = (ev: any) => {
        ev.preventDefault();
        if (!container.isDragItem) {
            container.appendChild(keep);
        }
    }

    // ******************************************************************** //
    container.addItem = (item: any) => {
        item.id = count.toString();
        item.setAttribute("draggable", "true");
        item.innerHTML = count;

        const itemOndrop = (ev: any) => {
            ev.stopPropagation();
            keep.style.opacity = '1';
            container.insertBefore(keep, ev.target);
        }

        const itemOnDragOver = (ev: any) => {
            keep.style.opacity = '0.5';
            container.isDragItem = true;
            if (container.indexOfKeep > getIndexOf(ev.target)) {
                container.insertBefore(keep, ev.target)
                container.indexOfKeep = getIndexOf(ev.target);
            } else if (container.indexOfKeep < getIndexOf(ev.target)) {
                container.insertBefore(keep, ev.target.nextSibling)
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

    container.ondrop = containerOnDrop;
    container.ondragover = containerOnDragOver;
    return container;
}

export { createContainer };
