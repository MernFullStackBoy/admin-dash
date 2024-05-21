import { MouseEventHandler } from "react"

interface ModalProp {
    show: boolean
    onClick: MouseEventHandler<HTMLButtonElement>
    dark: boolean
}

const Notification = ({ show, onClick, dark }: ModalProp) => {
    return (
        <div className={` w-[100%] ${dark ? "text-white" : "text-slate-400"} backdrop-blur-[10px] left-0 h-[100vh] ${show ? "flex" : "hidden"} justify-center items-center absolute top-0 `}>
            <div className={`w-[600px] flex justify-center items-center phone:w-[100%] phone:h-[250px] h-[300px] ${dark ? "bg-slate-800" : "bg-white"} shadow-2xl rounded-[20px]`}>
                <button onClick={onClick} className=" fas fa-xmark text-[red] relative phone:bottom-[100px] bottom-[120px] text-[30px] left-[400px] phone:left-[250px] " />
                <h1 className=" phone:text-[30px] font-semibold text-[40px] ">No Notification yet</h1>
            </div>
        </div>
    )
}

export default Notification