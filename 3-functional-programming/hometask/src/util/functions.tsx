import { Row } from "../components"

export const filterData = (items: Row[], storeData:Row[], value: number) => {
    let rows = []
    switch(value) {
        case 0:
            rows = [...items, ...storeData.filter((item) => item.posts == 0)]
        break;
        case 100:
            rows = [...items, ...storeData.filter((item) => item.posts > 100)]
        break;
        default: 
        break;
    }
    
    return rows;

}

export const searchData = (items:Row[], option:string) => {
    return [...items].filter(item => 
        item.country.toLowerCase().includes( option.toLowerCase() ) || 
        item.username.toLowerCase().includes( option.toLowerCase() )||
        item.name.toLowerCase().includes( option.toLowerCase() )
        )

}