import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"

interface LeftProp {
    isDark: boolean
    isHide: boolean
}

const Leftmenu = ({ isDark, isHide }: LeftProp) => {
    return (
        <div
            className={`
                flex 
                float-left
                flex-col
                items-center
                py-[40px]
                w-[10%]
                h-screen
                shadow-lg
                border-r
                border-l
                phone:max-w-[100px]
                phone:w-[100%]
                phone:absolute
                ${isDark ? "phone:bg-slate-950" : "phone:bg-white"}
                ${isHide ? "phone:translate-x-0" : "phone:translate-x-[-100%]"}
                phone:transition
                z-40
            `}
        >

            <img width={50} src={logo} alt="Logo" />

            <div
                className="
                    flex
                    flex-col
                    gap-[30px]
                    mt-[30px]
                "
            >
                <NavLink to="/">
                    <button className=" fas fa-house text-[25px] " />
                </NavLink>
                <NavLink to="home">
                    <button className=" fas fa-envelope text-[25px] " />
                </NavLink>
                <NavLink to="/home1">
                    <button className=" fa-solid fa-address-book text-[25px] " />
                </NavLink>
                <NavLink to="/home2">
                    <button className=" fa-solid fa-money-bill text-[25px] " />
                </NavLink>
                <NavLink to="/home3">
                    <button className=" fa-solid fa-gauge text-[25px] " />
                </NavLink>
                <NavLink to="/home4">
                    <button className=" fa-solid fa-file-invoice text-[25px] " />
                </NavLink>
                <NavLink to="/home5">
                    <button className=" fa-solid fa-piggy-bank text-[25px] " />
                </NavLink>
                <NavLink to="/home6">
                    <button className=" fa-solid fa-ticket text-[25px] " />
                </NavLink>
            </div>

        </div>
    )
}

export default Leftmenu