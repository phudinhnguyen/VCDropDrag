export const DropDrap = () => {
    let container: any;
    let count: any = '1';  
    let keep: any; 
    const createContainer = (className: string) => {
        container = document.createElement('div');
        container.classList.add(className); 

        // handle dd
        container.addEventListener('drop', (ev: any) => {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
            keep.style.opacity = '1';
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
                keep.style.opacity = '1';
                let id = ev.dataTransfer!.getData("text");
                let keepElm = document.getElementById(id);
                container.insertBefore(keepElm , ev.target);
            });

            item.addEventListener("dragover", (ev) => {                                  
                keep.style.opacity = '0.5';
                container.insertBefore(keep , ev.target);
                console.log(ev); 
                           
            })

            // handle dd
            item.addEventListener("dragstart", (ev: any) => {                
                ev.dataTransfer.setData("text", ev.target.id);
                keep = item;             
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