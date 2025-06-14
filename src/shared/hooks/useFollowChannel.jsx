import toast from "react-hot-toast";
import { followChannel as followChannelRequest } from '../../service';

export const useFollowChannel = () => {

    const followChannel = async (channelId, onSuccess) => {
        
        const responseData = await followChannelRequest(channelId);

        if(responseData.error) {
            return toast.error(
                responseData.e?.response?.data || 'Ocurrio un error al seguir al canal'
            )
        }
        
        toast.success('Channel followed successfully!')
        onSuccess(true)
    }

    return {
        followChannel
    }
}