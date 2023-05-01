function main() {
    console.log('log');
}

main();

const main2 = main; // objeto que representa a função

console.log(main2);
main2();

const main3 = function() {
    console.log('main3');
}
main3();

(function() {
    console.log('main4');
})();
