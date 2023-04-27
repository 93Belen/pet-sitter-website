import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default function Header(){
    const session = await getServerSession(authOptions);
    
    return (

    )
}