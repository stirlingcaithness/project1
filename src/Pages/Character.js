import { useState } from "react";
import HomeBanner from "../Components/HomeBanner";
import RannkingTable from "../Components/RankingTable";
import orochimaru from "../images/orochimaru2.jpg"
import hisoka from "../images/hisoka.jpg"

const Character = () => {
    const [characterList, setCharaterList] = useState([
        {characterName: 'Orochimaru', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", rank: 1, image: orochimaru},
        {characterName: 'Hisoka', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", rank: 2, image: hisoka},
        {characterName: 'Hisoka', description: "Lorem ipsum dolor sit amet", rank: 3, image: hisoka}
        ])


    return ( 
        <div className="outer-content">
            <div className="banner">
                <HomeBanner title={"Ranking of my Favourite Characters"} />
            </div>
            <RannkingTable animeList={characterList} title={"Character"}/>
        </div>
     );
}
 
export default Character;