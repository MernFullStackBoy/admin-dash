import TotalChart from "../charts/TotalChart"

interface Custom {
    darkset: boolean
}

const Customers = ({darkset}: Custom) => {
    return (
        <div>
            <div
                className={`
                    w-[100%]
                    h-[500px]
                    mt-[100px]
                    rounded-[20px]
                    border-[1px]
                    border-[#ff00c8]
                    font-semibold
                    ${darkset ? "text-white" : "text-slate-600"}
                `}
            >

                <div className=" h-[100px] phone:h-[50px] justify-around flex items-center border-b border-[blue] ">
                    <div
                        className="
                            w-[140px]
                            px-[10px]
                            phone:w-[100px]
                        "
                    >
                        <span className=" phone:text-[8px] ">Total Cusomers</span>
                        <h1 className=" text-[30px] phone:text-[16px] ">345,678</h1>
                    </div>
                    <div
                        className="
                            w-[140px]
                            px-[10px]
                        "
                    >
                        <span className=" phone:text-[8px] ">New User</span>
                        <h1 className=" text-[30px] phone:text-[16px] ">49</h1>
                    </div>
                    <div
                        className="
                            w-[140px]
                            px-[10px]
                        "
                    >
                        <span className=" phone:text-[8px] ">Growth</span>
                        <h1 className=" text-[30px] phone:text-[16px] ">+10%</h1>
                    </div>
                    <div
                        className="
                            w-[140px]
                            px-[10px]
                        "
                    >
                        <span className=" phone:text-[8px] ">Period</span>
                        <select className=" text-[30px] phone:text-[16px] bg-transparent outline-none ">
                            <option value="Month">Month</option>
                            <option value="Week">Week</option>
                            <option value="Daily">Daily</option>
                        </select>
                    </div>
                </div>

                <TotalChart />

            </div>
        </div>
    )
}

export default Customers