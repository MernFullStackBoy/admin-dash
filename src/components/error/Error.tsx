import { NavLink } from "react-router-dom"

const Error = () => {
    return (
        <div
            className="
                w-[1220px]
                h-screen
                flex 
                justify-center
                mx-auto
                phone:w-[100%]
                phone:absolute
            "
        >

            <div
                className="
                    flex 
                    items-center 
                    gap-[30px]
                    flex-col
                    mt-[120px]
                "
            >

                <span
                    className="
                        text-[40px]
                        animate-pulse
                        font-extrabold 
                        uppercase
                        text-[red] 
                        phone:text-[25px]
                        phone:text-center
                    "
                >Error! We not found this page</span>

                <NavLink
                    className="
                        text-[30px]
                        font-bold
                        animate-bounce 
                        underline
                        text-[blue]
                        phone:text-[20px]
                    "
                    to="/"
                >
                    👉👉 Back home 👈👈
                </NavLink>

            </div>
            
        </div>
    )
}

export default Error