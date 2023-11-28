export const productsLoader = async () => {
    const response = await fetch('http://localhost:8080/api/products')
    const data = await response.json()
    const sortedData = await data.sort((a,b)=>{
        if(a['category'] === 'pizza' && b['category'] !== 'pizza'){
            return -1
        }
        else if (a['category'] !== 'pizza' && b['category'] === 'pizza'){
            return 1
        }
        return a['category'].localeCompare(b['category'])
    })
   
    return sortedData;

}