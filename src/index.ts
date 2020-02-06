export const DropDrap = () => {
    let container: any;
    let count: any = '1';   
    const createContainer = (className: string) => {
        container = document.createElement('div');
        container.classList.add(className); 

        // handle dd
        container.addEventListener('drop', (ev: any) => {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        });
        
        container.addEventListener('dragover', (ev: any) => {
            ev.preventDefault();
        });

        container.addItem = (className: string) => {
            let item = document.createElement('div');            
            item.classList.add(className);
            item.setAttribute("id", count);
            item.setAttribute("draggable","true");
            item.innerHTML = count;

            item.addEventListener('drop', (ev) => {
                ev.stopPropagation();
                let id = ev.dataTransfer!.getData("text");
                let keepElm = document.getElementById(id);
                container.insertBefore(keepElm , ev.target);
            });

            item.addEventListener("dragover", (ev) => {
                
            })

            // handle dd
            item.addEventListener("dragstart", (ev: any) => {                
                ev.dataTransfer.setData("text", ev.target.id);
            });
            
            container.appendChild(item);
            count++;
        }
        return container;
    }
    return {
        createContainer
    }
}

// item.addEventListener('dragleave', (ev: any) => {
//     ev.preventDefault();
// });