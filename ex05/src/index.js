let foo = 12, boo = 45;
function main(foo, boo) {
    [12, 45] = [45, 12];
    return {foo, boo};
}
console.log(main(foo, boo));
module.exports = main;