export const DropDrap = () => {
    let count: any = '1';
    let keep: any;    
    
    const createContainer = (className: string) => {
        let container: any;
        container = document.z
        container.classList.add(className);
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
        container.addItem = (className: string) => {
            let item = document.createElement('div');
            item.classList.add(className);
            item.setAttribute("id", count);
            item.setAttribute("draggable", "true");
            item.innerHTML = count;

            const itemOndrop = (ev: any) => {                
                ev.stopPropagation();
                keep.style.opacity = '1';   
                container.insertBefore(keep, ev.target);                             
            }

            const itemOnDragOver = (ev:any) => {                                                
                console.log(container.indexOfKeep);                
                keep.style.opacity = '0.5';
                container.isDragItem = true;                                
                if(container.indexOfKeep > getIndexOf(ev.target)){
                    container.insertBefore(keep, ev.target)     
                    container.indexOfKeep = getIndexOf(ev.target);
                }else if(container.indexOfKeep < getIndexOf(ev.target)){
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
    return {
        createContainer
    }
}

// export const DropDrap = () => {
//     let count: any = '1';
//     let keep: any;

//     const createContainer = (className: string) => {
//         let container: any;
//         container = document.getElementsByClassName(className)[0];
//         container.isDragItem;
//         container.indexOfKeep;

//         const getIndexOf = (elm: any) => {
//             let i = 0;
//             while ((elm = elm.previousSibling) != null)
//                 i++;
//             return i;
//         }
//         const containerOnDrop = (ev: any) => {
//             ev.preventDefault();
//             ev.target.appendChild(keep);
//             keep.style.opacity = '1';
//         }
//         const containerOnDragOver = (ev: any) => {
//             ev.preventDefault();
//             if (!container.isDragItem) {
//                 container.appendChild(keep);
//             }
//         }

//         // ******************************************************************** //
//         container.addItem = (className: string) => {
//             let listItem: any = document.getElementsByClassName(className);
//             for (let i = 0; i < listItem.length; i++) {
//                 listItem[i].setAttribute("id", count);
//                 listItem[i].setAttribute("draggable", "true");
//                 listItem[i].innerHTML = count;

//                 const itemOndrop = (ev: any) => {
//                     ev.stopPropagation();
//                     keep.style.opacity = '1';
//                     container.insertBefore(keep, ev.target);
//                 }

//                 const itemOnDragOver = (ev: any) => {
//                     keep.style.opacity = '0.5';
//                     container.isDragItem = true;
//                     if (container.indexOfKeep > getIndexOf(ev.target)) {
//                         container.insertBefore(keep, ev.target)
//                         container.indexOfKeep = getIndexOf(ev.target);
//                     } else if (container.indexOfKeep < getIndexOf(ev.target)) {
//                         container.insertBefore(keep, ev.target.nextSibling)
//                         container.indexOfKeep = getIndexOf(ev.target);
//                     }
//                 }

//                 const itemOnDragLeave = (ev: any) => {
//                     container.isDragItem = false;
//                 }
//                 const itemOnDragStart = (ev: any) => {
//                     ev.dataTransfer.setData("text", ev.target.id);
//                     keep = listItem[i];
//                     container.indexOfKeep = getIndexOf(listItem[i]);
//                 }

//                 listItem[i].ondrop = itemOndrop;
//                 listItem[i].ondragover = itemOnDragOver;
//                 listItem[i].ondragleave = itemOnDragLeave;
//                 listItem[i].ondragstart = itemOnDragStart;

//                 container.appendChild(listItem[i]);
//                 count++;
//             }
//         }

//         container.ondrop = containerOnDrop;
//         container.ondragover = containerOnDragOver;
//         return container;
//     }
//     return {
//         createContainer
//     }
// }