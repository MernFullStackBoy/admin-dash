import { MouseEventHandler } from "react"
import useFetch from "../../hook/useFetch"
import { GridLoader } from "react-spinners"

type VisitorsModalProps = {
    onShow: MouseEventHandler<HTMLButtonElement>
    isDark: boolean
}

const VisitorsModal = ({ onShow, isDark }: VisitorsModalProps) => {

    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")

    return (
        <div className={`w-[100%] ${isDark ? "text-white" : "text-slate-400"} phone:w-[] overflow-scroll h-[100vh] backdrop-blur-[10px] z-50 absolute top-0 left-0`}>
            <button onClick={onShow} className=" bg-[red] fas fa-xmark phone:text-[20px] phone:mt-[5px] phone:top-0 phone:right-[-20px] text-[40px] rounded-[10px] px-[10px] py-[5px] text-white m-[30px] absolute right-0 " />
            <h1 className=" text-center text-[35px] phone:font-bold phone:text-[25px] font-semibold uppercase ">All visitors</h1>

            <div className={` w-[100%] h-auto py-[30px] mt-[60px] px-[40px] `}>
                <div className=" border phone:border-none p-[20px] flex justify-center items-center ">
                    {loading && <GridLoader size={20} color="#ff00a2" />}
                    {error && <h1 className=" text-[30px] font-extrabold text-[#ff004c] ">Someting went wrong</h1>}
                    {data.map((item: any, i) => {
                        return (
                            <div className=" flex phone:flex-col phone:gap-[40px] gap-[20px] p-[20px] " key={i}>
                                <div className=" flex flex-col phone:w-[100%] w-[300px] font-bold p-[10px] rounded-t border ">
                                    <h1 className=" text-center border-b text-[20px] ">Name</h1>
                                    {item.map((res: any) => <h2 className=" mt-[20px] border-b font-semibold ">{res.name}</h2>)}
                                </div>
                                <div className=" w-[300px] font-bold p-[10px] rounded-t border ">
                                    <h1 className=" text-center border-b text-[20px] ">Username</h1>
                                    {item.map((res: any) => <h2 className=" mt-[20px] border-b font-semibold ">{res.username}</h2>)}
                                </div>
                                <div className=" font-bold w-[300px] p-[10px] rounded-t border ">
                                    <h1 className=" text-center border-b text-[20px] ">Email</h1>
                                    {item.map((res: any) => <h2 className=" mt-[20px] border-b font-semibold ">{res.email}</h2>)}
                                </div>
                                <div className=" w-[300px] font-bold p-[10px] rounded-t border ">
                                    <h1 className=" text-center border-b text-[20px] ">Phone</h1>
                                    {item.map((res: any) => <h2 className=" mt-[20px] border-b font-semibold ">{res.phone}</h2>)}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default VisitorsModal