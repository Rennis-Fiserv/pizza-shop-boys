import axios from "axios"
// export default async function fetchEmployee(id) {
//     console.log("here")
//     const url = `http://localhost:8080/api/employees/${id}`
//     console.log(url)
//     try{
//     const response = await fetch(url).then((res)=>res.json());
//     console.log("here2")
//     return JSON.stringify(response)   
//     }
//     catch(error){
//         console.log("here3")
//         console.error(error)
//     }
// };
const fetchEmployee = async (id) => {
    const response = await axios.get(`http://localhost:8080/api/employees/${id}`)
    return response.data
}
export default fetchEmployee



