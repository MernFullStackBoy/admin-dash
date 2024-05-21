import { MouseEventHandler } from "react"
import Visitors from "../charts/Visitorchart"
import Customers from "./Customers"
import UserProfile from "./UserProfile"

interface Main {
    darkset: boolean
    onShow: MouseEventHandler<HTMLButtonElement>
}

const Maindash = ({ darkset, onShow }: Main) => {
    return (
        <div
            className="
                w-[1229px]
                h-screen 
                p-[20px]
                overflow-y-auto
                phone:w-[100%]
                phone:max-w-[360px]
                phone:ml-[2vh]
                phone:mt-[60px]
            "
        >

            <h1
                className={`
                 font-bold 
                ${darkset && "text-white"}
                text-[40px]
                phone:text-[30px]
               `}
            >Dashboard</h1>

            {/* Visitors card */}

            <div
                className="
                    flex 
                    gap-[30px]
                    items-center
                    phone:flex-col
                "
            >

                {/* Card 1 */}

                <div
                    className="
                        flex 
                        flex-wrap 
                        gap-[20px]
                        w-[620px] 
                        mt-[40px] 
                        phone:w-[100%]
                        phone:flex-col
                    "
                >

                    <div
                        className="
                            flex 
                            h-[80px]
                            border-[blue]
                            border 
                            px-[20px]
                            justify-between
                            w-[300px]
                            cursor-pointer
                            transition
                            hover:scale-[1.05]
                            duration-[0.3s]
                            rounded-[20px]
                            items-center 
                        "
                    >

                        <div
                            className="
                                flex 
                                items-center 
                                gap-[20px]
                            "
                        >

                            <i
                                className="
                                    fa-solid
                                    text-[blue]
                                    text-[30px]
                                    fa-bag-shopping
                                "
                            />

                            <span
                                className={`
                                    text-[15px]
                                    ${darkset && "text-white"} 
                                    font-semibold
                                `}
                            >Projetcts</span>

                        </div>

                        <h2
                            className={`
                                text-[24px]
                                ${darkset && "text-white"}
                                font-semibold
                            `}
                        >932</h2>

                    </div>

                    <div
                        className="
                            flex
                            h-[80px]
                            border-[yellow]
                            border
                            px-[20px]
                            justify-between 
                            w-[300px]
                            cursor-pointer
                            transition
                            hover:scale-[1.05]
                            duration-[0.1s]
                            rounded-[20px]
                            items-center 
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-[20px]
                            "
                        >

                            <i
                                className="
                                    fa-solid
                                    text-[yellow]
                                    text-[30px]
                                    fa-file
                                "
                            />

                            <span
                                className={`
                                    text-[15px]
                                    ${darkset && "text-white"}
                                    font-semibold 
                                `}
                            >Side Projects</span>

                        </div>

                        <h2
                            className={`
                                text-[24px]
                                ${darkset && "text-white"}
                                font-semibold
                          `}
                        >932</h2>

                    </div>

                    <div
                        className="
                            flex 
                            h-[80px]
                           border-[orange]
                            border 
                            px-[20px]
                            justify-between
                            w-[300px]
                            cursor-pointer
                            transition
                            hover:scale-[1.05]
                            duration-[0.3s]
                            rounded-[20px]
                            items-center
                        "
                    >

                        <div
                            className="
                                flex 
                                items-center
                                gap-[20px]
                            "
                        >

                            <i
                                className="
                                    fa-solid
                                    text-[orange]
                                    text-[30px]
                                    fa-sack-dollar
                                "
                            />

                            <span
                                className={`
                                    text-[15px]
                                    ${darkset && "text-white"}
                                    font-semibold  
                                `}
                            >Invesment</span>

                        </div>

                        <h2
                            className={`
                                text-[24px]
                                ${darkset && "text-white"}
                                font-semibold
                           `}
                        >932</h2>

                    </div>

                    <div
                        className="
                            flex
                            h-[80px]
                            border-[aqua]
                            border
                            px-[20px]
                            justify-between
                            w-[300px]
                            cursor-pointer
                            transition
                            hover:scale-[1.05]
                            duration-[0.3s]
                            rounded-[20px]
                            items-center
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-[20px]
                            "
                        >

                            <i
                                className="
                                    fa-solid
                                    text-[aqua]
                                    text-[30px]
                                    fa-users
                                "
                            />

                            <span
                                className={`
                                    text-[15px]
                                    ${darkset && "text-white"}
                                    font-semibold
                                `}
                            >Assets</span>

                        </div>

                        <h2
                            className={`
                                text-[24px]
                                ${darkset && "text-white"}
                                font-semibold
                            `}
                        >932</h2>
                    </div>

                </div>

                {/* Card 1 end */}

                {/* Card 2 */}

                <div
                    className={`
                        w-[530px]
                        h-[400px]
                        mt-[33px]
                        rounded-[20px]
                        border-[#ff0080]
                        border 
                        font-semibold
                        p-[20px]
                        ${darkset && "text-white"}
                        phone:w-[100%]
                        phone:h-[370px]
                    `}
                >

                    <div
                        className={`
                            text-[40px]
                            font-semibold 
                            flex
                            justify-between
                            phone:text-[20px]
                        `}
                    >

                        <h1>Visitors</h1>

                        <h2>345,000</h2>

                    </div>
                    <br />
                    <Visitors />

                    <button onClick={onShow} className=" text-[yellow] font-bold w-[120px] h-[40px] bg-[blue] rounded-[10px] transition duration-[0.1s] active:scale-[1.05] m-[10px] ">Show Visitors</button>

                </div>

                {/* Card 2 */}

            </div>

            {/* Visitors card end */}

            {/* Customers chart */}

            <Customers darkset={darkset} />

            {/* Customers chart end */}

            {/* User Profile */}

            <UserProfile isDark={darkset} />

            {/* User Profile end */}

            <h1 className={`text-center phone:text-[20px] text-[40px] uppercase ${darkset ? "text-slate-600": "text-slate-300"} font-bold mt-[40px]`}>This is demo app not real time</h1>

            <br /><br /><br /><br />
            <br /><br />

        </div>
    )
}

export default Maindash