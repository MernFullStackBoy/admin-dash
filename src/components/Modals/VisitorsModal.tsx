import { MouseEventHandler } from "react"

type VisitorsModalProps = {
    onShow: MouseEventHandler<HTMLButtonElement>
    isDark: boolean
}

const VisitorsModal = ({ onShow, isDark }: VisitorsModalProps) => {
    return (
        <div className={`w-[100%] ${isDark ? "text-white" : "text-slate-400"} h-[100vh] backdrop-blur-[10px] z-50 absolute top-0 left-0`}>
            <button onClick={onShow} className=" bg-[red] fas fa-xmark text-[40px] rounded-[10px] px-[10px] py-[5px] text-white m-[30px] absolute right-0 " />
            <h1 className=" text-center text-[35px] font-semibold uppercase ">All visitors</h1>

            <div className={` w-[100%] h-[400px] ${isDark ? "bg-slate-950" : "bg-white"} mt-[60px] px-[40px] `}>

            </div>

        </div>
    )
}

export default VisitorsModal