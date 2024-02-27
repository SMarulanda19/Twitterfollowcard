export function TwitterFollowCard ({ formatUsername, userName, name, isFollowing }) {
    console.log(isFollowing);
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                    alt="Avatar de persona 1" 
                    src={`https://unavatar.io/github/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUsername'>{formatUsername(userName)}</span>
                </div>
            </header>   
            <aside>
                <button className='tw-followCard-button'>
                    seguir
                </button>
            </aside>
        </article>
    );
}

