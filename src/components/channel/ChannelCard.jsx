const imageUrl = '';

const ChannelAvatar = ({url}) =>{
    return(
        <div className="channels-avatar-container">
            <img src={url || imageUrl} width='100%' height='100%' alt="Default avatar" />

        </div>
    )
}

export const ChannelCard = ({
    tittle,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) =>{
    const handleNavigate = () =>{
        navigateToChannelHandler(id)
    }

    return (
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl}/>
            <span className="channels-card-tittle">{tittle}</span>
            <span className="channels-card-tittle">{username}</span>
            <span className="channels-card-tittle" style={{color: isOnline ? 'green' : 'red'}}>
                {isOnline ? 'Online' : 'Offline'}
            </span>

        </div>
    )
}