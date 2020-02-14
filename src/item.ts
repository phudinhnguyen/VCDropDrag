import { IItemProps } from "./types";
import { context } from "./context";
import { id } from "./utils";

export const createItem = function (container: HTMLElement, props?: IItemProps) {
    const item = props?.elm || document.createElement("div");
    item.id = id();
    item.setAttribute("draggable", "true");
    item.container = container;

    if (props?.className) {
        item.classList.add(props.className)
    }

    if (Array.prototype.indexOf.call(container.childNodes, item) === -1) {
        container.appendChild(item);
    }

    const getIndexOf = (elm: any) => {
        let i = 0;
        while ((elm = elm.previousSibling) != null)
            i++;
        return i;
    }

    const itemOndrop = (ev: DragEvent) => {
        if (!context.keepElm || !(ev.target && ev.target instanceof HTMLElement && context.keepElm)) {
            return;
        }
        context.keepElm.style.opacity = '1';
        if (ev.target === context.keepElm) {
            return;
        }

        const nContainer = context.adjacentContainer(ev.x, ev.y)
        if (!nContainer) {
            return;
        }
        
        item.container = nContainer;
        nContainer.insertBefore(context.keepElm, ev.target);

    }

    const itemOnDragOver = (ev: DragEvent) => {
        if (ev.target && ev.target instanceof HTMLElement && context.keepElm) {
            context.keepElm.style.opacity = '0.5';
            container.isDragItem = true;
            if (container.indexOfKeep! > getIndexOf(ev.target)) {
                container.insertBefore(context.keepElm, ev.target)
                container.indexOfKeep = getIndexOf(ev.target);
            } else if (container.indexOfKeep! < getIndexOf(ev.target)) {
                container.insertBefore(context.keepElm, ev.target.nextSibling)
                container.indexOfKeep = getIndexOf(ev.target);
            }
        }
    }

    const itemOnDragLeave = (ev: DragEvent) => {
        container.isDragItem = false;
    }

    const itemOnDragStart = (ev: DragEvent) => {
        if (ev.dataTransfer && ev.target && ev.target instanceof HTMLElement && ev.target.id) {
            ev.dataTransfer.setData("text", ev.target.id);
            context.keepElm = item;
            container.indexOfKeep = getIndexOf(item);
        }
    }

    item.ondrop = itemOndrop;
    item.ondragover = itemOnDragOver;
    item.ondragleave = itemOnDragLeave;
    item.ondragstart = itemOnDragStart;

    return item;
}