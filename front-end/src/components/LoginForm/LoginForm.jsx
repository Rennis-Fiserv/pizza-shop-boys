import {useForm} from "react-hook-form"
import fetchEmployee from "../../util/requests/fetchEmployee"
import { useContext } from "react"
import {UserContext} from '../../contexts/UserContext'
import { useNavigate } from "react-router-dom"

import './LoginForm.css'

export default function LoginForm(){
const {user, loginUser, logoutUser }= useContext(UserContext)
const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    async function loginFormHandler(data){
        const response = await fetchEmployee(data['id'])
        loginUser(response)
        if(response['employeeRole'] == 'E') navigate('/employee/orders')
        if (response ['employeeRole'] == 'M') navigate('/manager')
    }
    return (
        <form onSubmit={handleSubmit(loginFormHandler)}>
            <input type="number" placeholder="12345" {...register("id", {required: true})} />
            <input type="submit" value="login"/>
        </form>
    )
}