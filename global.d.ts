export {}
declare global {
  interface HTMLElement {
    isDragItem?: boolean,
    indexOfKeep?: number,
    addItem: Function,
    container: HTMLElement
  }
}


