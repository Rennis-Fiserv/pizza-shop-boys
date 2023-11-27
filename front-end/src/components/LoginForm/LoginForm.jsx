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
        if(response['employeeRole'] == 'E') navigate('/employee')
        if (response ['employeeRole'] == 'M') navigate('/manager')
    }
    return (
        <form className="logform" onSubmit={handleSubmit(loginFormHandler)}>
            <div className="log-headding">{'Enter Employee ID:'}</div>
            <input className="login-input" type="number" placeholder="Employee ID" {...register("id", {required: true})} />
            <div className="space"></div>
            <input className="logbttn" type="submit" value="Enter"/>
        </form>
    )
}