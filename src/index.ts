interface IDragble {
    class?: string,
}

export function createDragable(obj:IDragble) {
    const container = document.createElement('div');
    container.classList.add(`${obj.class}`);

    const addItem = (className: string) => {
        let item = document.createElement('div');
        item.classList.add(className);
        container.appendChild(item);        
    }

    return {
        container,
        addItem
    }
}

interface IItem {
    class?: string,
}