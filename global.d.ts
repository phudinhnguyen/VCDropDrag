import { IMessage } from "./src/types";

export {}
declare global {
  interface HTMLElement {
    isDragItem?: boolean,
    indexOfKeep?: number,
    addItem: Function,
    container: HTMLElement,
    onDrop?: (e: DragEvent, data: IMessage) => any,
  }
}


