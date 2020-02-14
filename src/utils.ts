export const id = function () {
    return ("z" + (parseInt((Math.random() * 36 * 36 * 36) as any)).toString(36)).substr(-3) + (Date.now()).toString(36)
}