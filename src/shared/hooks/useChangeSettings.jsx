import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getChannelSettings, updateChannelSettings } from "../../services";
import { data } from "react-router-dom";

export const useChannelSettings = () =>{
    const [channelSettings, setChannelSettings,] = useState();
    
    const fetchChannelSettings = async () =>{
        const response = await getChannelSettings();

        if (response.error) {
            return toast.error(
                response.e?.response?.data  || 'Ocurrio un error al obtener la data del canal'
            )
        }
        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarUrl: response.data.avatarUrl,
            streamKey: response.data.StreamKey
        })
    }

    const saveSettings = async(data) =>{
        const response = await updateChannelSettings(data)

        if(response.error){
            return toast.error(
                response.e?.response?.data  || 'Ocurrio un error al obtener la informacion del canal'
            )
        }
        toast.success('informacion actualizada correctamente')
    }

    useEffect(()=>{
        fetchChannelSettings()
    },[])

    return ({
        isFetching : !channelSettings,
        channelSettings,
        saveSettings
    })

}