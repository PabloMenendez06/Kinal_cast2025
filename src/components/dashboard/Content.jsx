import { Route, Routes } from "react-router-dom";
import { Channel, Channels } from "../channel/Channels";
 
export const Content = ({ channel }) => {
    return(
        <div className="class content-container">
            <Routes>
                <Route path='channels' element={<Channels channels={channels}/>} />
            </Routes>
        </div>
    )
}