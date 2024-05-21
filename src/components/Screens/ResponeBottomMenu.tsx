import { MouseEventHandler } from "react"
import { useNavigate } from "react-router-dom"
import person from "../../assets/Placeholder.png"

interface Menu {
    darkLigh: boolean
    onClick: MouseEventHandler<HTMLButtonElement>
    onClick2: MouseEventHandler<HTMLButtonElement>
    setSettings: MouseEventHandler<HTMLButtonElement>
    onLight: MouseEventHandler<HTMLButtonElement>
    onDark: MouseEventHandler<HTMLButtonElement>
    settings: boolean
}

const ResponeTopMenu = ({darkLigh, onClick, onClick2, setSettings, onLight, onDark, settings}: Menu) => {

    const navigate = useNavigate()

    return (
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
    )
}

export default ResponeTopMenu