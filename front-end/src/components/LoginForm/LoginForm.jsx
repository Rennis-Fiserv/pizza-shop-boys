import {useForm} from "react-hook-form"
import fetchEmployee from "../../util/requests/fetchEmployee"
import { useContext } from "react"
import {UserContext} from '../../contexts/UserContext'
import { useNavigate } from "react-router-dom"


export default function LoginForm(){
const {user, loginUser, logoutUser }= useContext(UserContext)
const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    async function getUserInfo(data){
        const response = await fetchEmployee(data['id'])
        loginUser(response)
        if(response['employeeRole'] == 'E') navigate('/employee')
        if (response ['employeeRole'] == 'M') navigate('/manager')
    }
    return (
        <form onSubmit={handleSubmit(getUserInfo)}>
            <input type="number" placeholder="12345" {...register("id", {required: true})} />
            <input type="submit" value="login"/>
        </form>
    )
}