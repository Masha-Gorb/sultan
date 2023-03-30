export function cartSum(productsArr) {
    return productsArr.map(m => m.price).reduce(function(sum, elem) {
        return sum + elem;
    }, 0).toFixed(2)
}