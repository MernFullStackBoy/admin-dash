import { useState } from "react"
import Components from "./Routes/Components"
import Messagemodal from "./components/Modals/Messagemodal"
import Leftmenu from "./components/Screens/Leftmenu"
import Topmenu from "./components/Screens/Topmenu"
import Notification from "./components/Modals/Notification"
import VisitorsModal from "./components/Modals/VisitorsModal"
import ResponeTopMenu from "./components/Screens/ResponeBottomMenu"

const App = () => {

  const [messageshow, setmessageshow] = useState<boolean>(false)

  const [notiShow, setNotiShow] = useState<boolean>(false)

  const [dark, setDark] = useState<boolean>(true)

  const [settings, setSettings] = useState<boolean>(false)

  const [visitors, setVisitors] = useState<boolean>(false)

  const [hide, setHide] = useState<boolean>(false)

  return (
    <div onClick={() => {
      settings && setSettings(false)
      hide && setHide(false)
    }} className={`h-[100vh] overflow-hidden w-[100%] ${dark ? "bg-slate-950" : "bg-white"}`}>
      <div className=" w-[1366px] mx-auto ">
        <Leftmenu
          isDark={dark}
          isHide={hide}
        />
        <Topmenu
          onClick={() => setmessageshow(true)}
          onClick2={() => setNotiShow(true)}
          darkLigh={dark}
          onDark={() => setDark(false)}
          onLight={() => setDark(true)}
          setSettings={() => setSettings(prev => !prev)}
          settings={settings}
          setshow={() => setHide(true)}
        />
        <Components
          isDark={dark}
          onVisit={() => setVisitors(true)}
        />
        <Messagemodal
          show={messageshow}
          onClick={() => setmessageshow(false)}
          dark={dark}
        />
        <Notification
          dark={dark}
          show={notiShow}
          onClick={() => setNotiShow(false)}
        />
        {visitors && (
          <VisitorsModal
            isDark={dark}
            onShow={() => setVisitors(false)}
          />
        )}

        <ResponeTopMenu
          settings={settings}
          setSettings={() => setSettings(prev => !prev)}
          onClick={() => setmessageshow(true)}
          onClick2={() => setNotiShow(true)}
          darkLigh={dark}
          onDark={() => setDark(false)}
          onLight={() => setDark(true)}
        />
      </div>
    </div>
  )
}

export default App