import Card from "../../components/Card/Card";
import LoginForm from "../../components/LoginForm/LoginForm";
import './LoginPage.css'
import image from '../../images/transparentpizzashopboys.png'
 
export default function LoginPage(){
    return(
        <div className="logpage">
            <Card className="login-card">
                <div className="photo">
                    <img className="logo"src={image}></img>
                </div>
                <div>
                    <LoginForm/>
                </div>
            </Card>
        </div>
    )
}