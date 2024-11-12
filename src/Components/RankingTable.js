const RannkingTable = ({animeList, title}) => {


    return ( 

        <div className="content">
        {/* <h1>Ranking of my Favourite Characters</h1> */}


    <div className="rankings-wrapper">
        <div className="column-wrapper">
                <div className="rank-title">
                <h2>Rank</h2>
                </div>
                <div className="info-title">
                    <h2>{title}</h2>
                </div>
            </div>
        {animeList.map((character) => (
            <div className="character-wrapper">
                <div className="rank">
                <h1>{character.rank}</h1>
                </div>
                {/* <div className="character-img">
                    <img src={character.image} alt="orochimaru img" />
                </div> */}
                <div className="character-info">
                    <img src={character.image} alt="orochimaru img" />
                    <div className="info-text">
                        <h2>{character.characterName}</h2>
                        <p>{character.description}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    </div>


     );
}
 
export default RannkingTable;