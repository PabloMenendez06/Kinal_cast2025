import toast from "react-hot-toast";
import { changePassword as changePasswordRequest } from "../../services";

export const useChnagePassword = () =>{
    const changePassword = async (password,newPassword) =>{
        const responseData = await changePasswordRequest({password,newPassword});
        if (responseData.error) {
            return toast.error(
                responseData.e?.response?.data || 'No fue Posible actualizar el password'
            );
        }
        toast.success('Password actualizada correctamente')
    }
    return{
        changePassword
    }

}
