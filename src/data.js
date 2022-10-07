export function order(data, value){
    if (value == "A-Z"){
        return data.sort((a, b) => a.title > b.title ? 1 : -1)
    }
    
}