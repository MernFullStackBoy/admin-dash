import { MouseEventHandler } from "react"

type VisitorsModalProps = {
    onShow: MouseEventHandler<HTMLButtonElement>
}

const VisitorsModal = ({onShow}: VisitorsModalProps) => {
    return (
        <div className=" w-[100%] h-[100vh] backdrop-blur-[10px] z-50 absolute top-0 left-0 ">
            <button onClick={onShow} className=" bg-[red] fas fa-xmark text-[40px] rounded-[10px] px-[10px] py-[5px] text-white m-[30px] absolute right-0 " />
        </div>
    )
}

export default VisitorsModal