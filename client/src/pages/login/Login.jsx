
import Loginone from "../../components/loginComponents/Loginone"
import Header from "./../../components/loginComponents/Header"


export default function LoginPage(){
    return(
        <>
        <div className="min-h-full bg-white h-screen flex items-center justify-center  py-12 px-2 sm:px-8 lg:px-10">
    <div className="max-w-md w-full space-y-8 border-2 px-[40px] py-10">
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
                <Loginone/>
                </div>
                </div>
                
                
            
        </>
    )
}