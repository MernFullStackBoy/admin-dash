import Impression from "../charts/Impression"
import Statistic from "../charts/Statistic"
import UserProfileChart from "../charts/UserProfileChart"

interface User {
    isDark: boolean
}

const UserProfile = ({ isDark }: User) => {
    return (
        <div
            className={`
                mt-[40px]
                w-[100%]
                h-[500px]
                p-[10px]
                rounded-[20px]
                ${isDark ? "text-white" : "text-slate-600"}
                flex 
                justify-between
                phone:flex-col
                phone:gap-[30px]
                phone:h-auto
            `}
        >
            <div className=" w-[300px] h-[450px] p-[10px] rounded-[10px] border-[2px] border-[#ff006a] ">
                <div className=" flex flex-col items-center ">
                    <h1 className=" font-bold text-[20px] ">User Profile</h1>
                    <UserProfileChart />
                </div>
                <br />
                <div className=" flex gap-[20px] flex-col ">
                    <div className=" flex items-center justify-between ">
                        <div className=" flex items-center gap-[10px] ">
                            <div className=" w-[30px] h-[30px] rounded-full border-[7px] border-[red] " />
                            <h1 className=" font-semibold ">Male</h1>
                        </div>
                        <span className=" font-bold ">55%</span>
                    </div>
                    <div className=" flex items-center justify-between ">
                        <div className=" flex items-center gap-[10px] ">
                            <div className=" w-[30px] h-[30px] rounded-full border-[7px] border-[green] " />
                            <h1 className=" font-semibold ">Female</h1>
                        </div>
                        <span className=" font-bold ">35%</span>
                    </div>
                    <div className=" flex items-center justify-between ">
                        <div className=" flex items-center gap-[10px] ">
                            <div className=" w-[30px] h-[30px] rounded-full border-[7px] border-[blue] " />
                            <h1 className=" font-semibold ">Other</h1>
                        </div>
                        <span className=" font-bold ">10%</span>
                    </div>
                </div>
            </div>

            {/* Statistic */}

            <div className=" w-[850px] phone:w-[100%] phone:overflow-y-scroll phone:h-auto phone:gap-[60px] phone:flex-col p-[10px] border-[#ea00ff] flex border-2 rounded-[10px] h-[450px] ">
                <div className=" h-[400px] w-[600px] ">
                    <h1 className=" text-[25px] font-bold ">Statistics</h1>
                    <Statistic />
                </div>
                <div>
                    <h1 className=" text-[25px] w-[300px] p-[10px] font-bold ml-[17px] ">Weekly</h1>
                    <div className=" flex justify-between px-[20px] mt-[20px] ">
                        <div className=" flex flex-col justify-center items-center ">
                            <span className=" font-semibold text-[12px] ">This Week</span>
                            <h1 className=" text-[25px] text-[green] font-bold ">+20%</h1>
                        </div>
                        <div className=" flex flex-col justify-center items-center ">
                            <span className=" font-semibold text-[12px] ">Last Week</span>
                            <h1 className=" text-[25px] text-[yellow] font-bold ">+13%</h1>
                        </div>
                    </div>

                    <h1 className=" text-[20px] mt-[30px] ml-[30px] font-bold ">Impression</h1>
                    <Impression />
                </div>
            </div>

            {/* Statistic end */}

        </div>
    )
}

export default UserProfile