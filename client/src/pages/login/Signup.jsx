import Header from "./../../components/loginComponents/Header"
import Signupone from "../../components/loginComponents/Signupone"

export default function SignupPage(){
    return(
        <>
        
         <div className="min-h-full h-screen bg-white flex items-center justify-center  py-12 px-2 sm:px-8 lg:px-10">
    < div className="max-w-md w-full space-y-8 border-2 px-[40px] py-10">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signupone/>
            </div>
            </div>
        </>
    )
}