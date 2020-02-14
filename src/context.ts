import { IContext } from "./types";

export const context: IContext = {
    keepElm: null,
    containers: [],
    adjacentContainer: function (x, y) {
        let _container, _index = 0, coorContainer;
        while ((_container = this.containers[_index++])) {
            coorContainer = _container.getBoundingClientRect();
            if (coorContainer.top <= y && coorContainer.right >= x && coorContainer.bottom >= y && coorContainer.left <= x) {
                return this.containers[0]
            }
        }
        return null;
    }
}