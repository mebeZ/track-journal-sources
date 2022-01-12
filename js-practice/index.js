function add(a, b) {
    console.log(a+b);
}

const add2 = (a, b) => {
    console.log(a+b);
}

add(1, 2);
add2(1, 2);

const names = ['Zach', 'Emerson', 'Waldo', 'Jeff'];

const new_names = names.map(fNewName);

function fNewName(name) {
    return name + 's';
}

