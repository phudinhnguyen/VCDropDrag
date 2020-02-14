export interface IContainerProps {
    elm?: HTMLElement,
    className: string,
}

export interface IItemProps {
    elm?: HTMLElement,
    className?: string,
}

export interface IContext {
    keepElm: HTMLElement | null,
    containers: HTMLElement[],
    adjacentContainer: (x: number, y: number) => HTMLElement | null
}