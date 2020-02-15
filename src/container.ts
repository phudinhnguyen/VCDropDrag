import { IContainerProps, IItemProps } from "./types";
import { context } from "./context";
import { createItem } from "./item";
import { id } from "./utils";


export const createContainer = (props?: IContainerProps) => {
    let container: HTMLElement;

    (function () {
        container = props?.elm || document.createElement("div");
        if (props?.className) {
            container.classList.add(props?.className);
        }
        container.id = id();
        container.isDragItem;
        container.indexOfKeep;
        context.containers.push(container);
    })();

    const containerOnDrop = (ev: DragEvent) => {
        ev.preventDefault();
        if (context.keepElm) {
            context.keepElm.style.opacity = '1';
        }
    }
    const containerOnDragOver = (ev: DragEvent) => {
        ev.preventDefault();
        if (!container.isDragItem && context.keepElm) {
            container.appendChild(context.keepElm);
        }
    }

    container.addItem = (props?: IItemProps) => {
        return createItem(container, props);
    }

    container.ondrop = containerOnDrop;
    container.ondragover = containerOnDragOver;

    return container;
}