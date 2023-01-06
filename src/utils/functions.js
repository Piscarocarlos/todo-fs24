export function getData() {

    return [
        {
            id: 1,
            title: "Appart a louer à Fès",
            price: 10000,
            pieces: 3,
            image: "https://via.placeholder.com/120x100",
            location: "Fès"
        },
        {
            id: 2,
            title: "Appart a louer à Rabat",
            price: 4000,
            pieces: 3,
            image: "https://via.placeholder.com/120x100",
            location: "Rabat"
        },
        {
            id: 3,
            title: "Appart a louer à Casa",
            price: 1000,
            pieces: 3,
            image: "https://via.placeholder.com/120x100",
            location: "Casa"
        },
        {
            id: 4,
            title: "Appart a louer à Oujda",
            price: 3000,
            pieces: 3,
            image: "https://via.placeholder.com/120x100",
            location: "Oujda"
        }
    ]

}


export function getDetail(id) {
    return getData().filter((item) => {
        return item.id == id
    })[0];

}