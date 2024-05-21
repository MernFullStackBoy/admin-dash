import { MouseEventHandler } from "react"
import person from "../../assets/Placeholder.png"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"

type TopMenuProp = {
    onClick: MouseEventHandler<HTMLButtonElement>
    onClick2: MouseEventHandler<HTMLButtonElement>
    darkLigh: boolean
    onLight: MouseEventHandler<HTMLButtonElement>
    onDark: MouseEventHandler<HTMLButtonElement>
    settings: boolean
    setSettings: MouseEventHandler<HTMLButtonElement>
    setshow: MouseEventHandler<HTMLButtonElement>
}

const Topmenu = ({ onClick, onClick2, darkLigh, onDark, onLight, setSettings, settings, setshow }: TopMenuProp) => {

    const navigate = useNavigate()

    return (
        <>

            <div className={` phone:flex ${darkLigh ? "bg-slate-950" : "bg-white"} z-30 top-0 px-[20px] ${darkLigh ? "text-white" : "text-slate-400"} hidden w-[100%] h-[7vh] shadow-xl items-center absolute justify-between `}>
                <button onClick={setshow} className=" fas fa-bars " />
                <img className=" w-[40px] " src={logo} alt="Logo" />
            </div>

            <nav
                className={`
                flex
                items-center 
                px-[40px]
                float-right 
                w-[90%]
                h-[80px]
                shadow-md 
                justify-between
                border-b
                phone:w-[100%]
                phone:h-[50px]
                phone:absolute
                phone:bottom-0
                ${darkLigh ? "bg-slate-950" : "bg-white"}
                z-40
                phone:px-7
                phone:hidden
            `}
            >
                {/* Search Panel */}

                <form>
                    <button
                        type="button"
                        className=" 
                        fa-solid
                        fa-magnifying-glass
                        text-blue-400
                        text-[20px]
                        relative 
                        left-[40px]
                        phone:left-0
                    "
                    />
                    <input
                        type="text"
                        className=" 
                        w-[300px]
                        h-[50px]
                        rounded-[10px]
                        bg-slate-200 
                        outline-none
                        px-[50px]
                        font-semibold
                        text-[18px]
                        phone:hidden
                        phone:absolute
                        phone:left-2
                        phone:w-[95%]
                        phone:h-[45px]
                    "
                        placeholder="Search here..."
                    />
                </form>

                {/* Search Panel end */}



                {/* Settings */}

                <div className=" gap-[30px] ">

                    <button
                        onClick={onClick}
                        className=" 
                        text-[24px]
                        text-slate-400
                        fas fa-message
                    "
                    />

                    <button
                        onClick={onClick2}
                        className="
                        text-[24px]
                       text-slate-400
                       fas fa-bell
                    "
                    />

                    <button
                        onClick={setSettings}
                        className="
                        text-[24px]
                        text-slate-400
                        fas fa-gear
                    "
                    />

                    <div
                        className={`
                        w-[190px]
                        h-[200px]
                        ${settings ? "block" : "hidden"}
                        shadow-2xl
                        ${darkLigh ? "bg-slate-800" : "bg-white"}
                        rounded-[20px]
                        absolute 
                        ml-[130px]
                    `}
                    >

                        <h1
                            className="
                            text-[25px]
                            mt-[20px]
                            ml-[20px]
                            text-slate-400
                            font-semibold
                            uppercase
                        "
                        >Settings</h1>

                        <div
                            className="
                        h-[60px]
                        px-[10px]
                        mt-[10px]
                        border-t 
                        border-b
                        w-[100%]
                        flex 
                        items-center
                        justify-between
                    "
                        >

                            {darkLigh ? (
                                <>
                                    <span
                                        className={`
                                        text-[20px] 
                                        font-semibold
                                        ${darkLigh ? "text-white" : "text-slate-600"} 
                                    `}
                                    >Light mode</span>

                                    <button
                                        onClick={onDark}
                                        className={`
                                        fas fa-sun
                                        text-[40px]
                                        ${darkLigh ? "text-white" : "text-slate-600"}
                                    `}
                                    />
                                </>

                            ) : (

                                <>
                                    <span
                                        className="
                                        text-[20px]
                                        font-semibold
                                        text-slate-600
                                    "
                                    >Dark mode</span>

                                    <button
                                        onClick={onLight}
                                        className="
                                        fas fa-moon
                                        text-[40px]
                                        text-slate-600
                                    "
                                    />
                                </>

                            )}

                        </div>

                        <div
                            className={`
                        h-[60px]
                        border-t
                        w-[100%]
                        mt-[10px]
                        flex
                        items-center
                        justify-between
                        px-[10px]
                        font-semibold
                        ${darkLigh ? "text-white" : "text-slate-500"}
                        `}
                        >
                            <span className=" text-[20px] ">Exit</span>
                            <button onClick={() => navigate(-1)} className=" fas fa-door-open text-[30px] " />
                        </div>

                    </div>

                    <div
                        className="
                        flex
                        gap-[10px]
                        items-center 
                        font-semibold 
                    "
                    >
                        <img className=" phone:w-[70%] phone:rounded-full " src={person} alt="Person" />

                        <div className={` ${darkLigh && "text-white phone:hidden "} `}>

                            <h3 className=" text-[20px] ">Zara Wardani</h3>

                            <span>Admin</span>

                        </div>

                    </div>

                </div>

                {/* Settings end */}

            </nav>

            <nav className={` ${darkLigh ? "text-white" : "text-slate-400"} phone:flex items-center justify-between px-7 hidden absolute w-[100%] h-[10vh] ${darkLigh ? "bg-slate-950" : "bg-white"} bottom-0 z-40 `}>
                <button className=" fa-solid fa-magnifying-glass " />
                <button onClick={onClick} className=" fas fa-message " />
                <button onClick={onClick2} className=" fas fa-bell " />
                <button onClick={setSettings} className=" fas fa-gear " />
                <img src={person} className=" w-[40px] rounded-full " alt="Person" />

                <div
                    className={`
                        w-[190px]
                        h-[200px]
                        ${settings ? "block" : "hidden"}
                        shadow-2xl
                        ${darkLigh ? "bg-slate-800" : "bg-white"}
                        rounded-[20px]
                        absolute 
                        ml-[130px]
                        phone:w-[140px]
                        phone:h-[140px]
                        phone:bottom-[100px]
                        phone:rounded-[10px]
                        phone:right-0
                    `}
                >

                    <h1
                        className="
                            text-[25px]
                            mt-[20px]
                            ml-[20px]
                            text-slate-400
                            font-semibold
                            uppercase
                            phone:text-[17px]
                            phone:ml-[10px]
                            phone:mt-[10px]
                        "
                    >Settings</h1>

                    <div
                        className="
                        h-[60px]
                        px-[10px]
                        mt-[10px]
                        border-t 
                        border-b
                        w-[100%]
                        flex 
                        items-center
                        justify-between
                        phone:h-[35px]
                    "
                    >

                        {darkLigh ? (
                            <>
                                <span
                                    className={`
                                        text-[20px] 
                                        font-semibold
                                        ${darkLigh ? "text-white" : "text-slate-600"}
                                        phone:text-[12px] 
                                    `}
                                >Light mode</span>

                                <button
                                    onClick={onDark}
                                    className={`
                                        fas fa-sun
                                        text-[40px]
                                        ${darkLigh ? "text-white" : "text-slate-600"}
                                        phone:text-[25px]
                                    `}
                                />
                            </>

                        ) : (

                            <>
                                <span
                                    className="
                                        text-[20px]
                                        font-semibold
                                        text-slate-600
                                        phone:text-[12px] 
                                    "
                                >Dark mode</span>

                                <button
                                    onClick={onLight}
                                    className="
                                        fas fa-moon
                                        text-[40px]
                                        text-slate-600
                                        phone:text-[25px]
                                    "
                                />
                            </>

                        )}

                    </div>

                    <div
                        className={`
                        h-[60px]
                        border-t
                        w-[100%]
                        mt-[10px]
                        flex
                        items-center
                        justify-between
                        px-[10px]
                        font-semibold
                        ${darkLigh ? "text-white" : "text-slate-500"}
                        phone:h-[35px]
                        `}
                    >
                        <span className=" phone:text-[12px] text-[20px] ">Exit</span>
                        <button onClick={() => navigate(-1)} className=" fas fa-door-open phone:text-[20px] text-[30px] " />
                    </div>

                </div>

            </nav >
        </>
    )
}

export default Topmenu