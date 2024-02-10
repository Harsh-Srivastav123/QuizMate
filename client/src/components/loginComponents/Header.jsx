import {Link} from 'react-router-dom';
import Logo from "../../assets/quizlogo.jpeg"

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-[80px] w-[290px] rounded-lg"
                    src={Logo}/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-[#0F52BA]">
                {heading}
            </h2>
            <p className=" text-center text-sm text-[#0F52BA] mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-[#0F52BA] hover:text-[#191970]">
                {linkName}
            </Link>
            </p>
        </div>
    )
}