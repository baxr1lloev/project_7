let  arr_cars = [
    {

        name: 'Toyota',
        year: 1937,
        isRadio: true,
        color: 'white',
        engine: 5.1,
        price: 70000

    },
    {
        name: 'Ferrari',
        year: 1954,
        isRadio: true,
        color: 'red',
        engine: 7.2
        

    },
    {
        name: 'Bugatti',
        year: 1955,
        isRadio: true,
        color: 'blue',
        engine: 6.0,
        price: 75000

    }
]

let name = prompt().trim().toLowerCase()
let find = arr_cars.find(item => item.name.toLowerCase() === name.toLowerCase())


let searcher_car = confirm(`Do you wand delete this car?
Car: ${find.name}
Year: ${find.year}
Radio: ${find.isRadio}
Color: ${find.color}
Engine: ${find.engine}
Price: ${find.price}`)



if (searcher_car === false) {

    let searcher = arr_cars.find((item, index) => item.name === name)

    let idx = arr_cars.indexOf(finded)

    arr_cars.splice(idx, 1)

    


} else {}
console.log(arr_cars);