"use client";
import { usePathname, useRouter } from 'next/navigation'
import { Car, LetterCircleP } from "@phosphor-icons/react/dist/ssr"

export default function SideBar(){
    const pathname = usePathname()
    const router = useRouter()

    function goToPage(page){
        router.push(page)
    }

    return (
        <div className="absolute left-0 min-h-screen min-w-24 p-2 flex 
        justify-start items-center bg-blue-950 text-white flex-col space-y-3">
                <div onClick={() => goToPage("/dashboard")} 
                className={pathname === "/dashboard" ? "bg-green-600 p-2 rounded-md cursor-pointer" : "cursor-pointer"}>
                    <Car color="white" size={26} />
                </div>
                <div onClick={() => goToPage("/park")} 
                className={pathname === "/park" ? "bg-green-600 p-2 rounded-md cursor-pointer" : "cursor-pointer"}>
                    <LetterCircleP  color="white" size={26} />
                </div>
        </div>
    )
}