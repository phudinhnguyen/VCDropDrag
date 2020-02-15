
export const id = function () {
    return ("z" + (parseInt((Math.random() * 36 * 36 * 36) as any)).toString(36)).substr(-3) + (Date.now()).toString(36)
}

export const setReadonly = function (targetObj: any, fields: string[]) {
    const handlers = {
        set: (target: any, key: string, value: any) => {
            if (fields.indexOf(key) !== -1) {
                throw new TypeError(`${key} is readonly`)
            }
            target[key] = value;
            return true;
        }
    }

    return new Proxy(targetObj, handlers);
}