import { Route, Routes } from "react-router-dom"
import Maindash from "../components/Screens/Maindash"
import Error from "../components/error/Error"
import { MouseEventHandler } from "react"

interface Comp {
    isDark: boolean
    onVisit: MouseEventHandler<HTMLButtonElement>
}

const Components = ({ isDark, onVisit }: Comp) => {
    return (
        <div className=" shadow-xl phone:w-[100%] float-left overflow-y-scroll overflow-x-hidden ">
            <Routes>
                <Route element={<Maindash onShow={onVisit} darkset={isDark} />} path="/" />
                <Route element={<Error />} path="*" />
            </Routes>
        </div>
    )
}

export default Components