import { Tab, TabList, Tabs } from "@chakra-ui/react";
import { useEffect } from "react";

function Filter({setActiveGenre, activeGenre, setFiltered, popular}){
    
    useEffect(()=>{
        if(activeGenre === 0){
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
        setFiltered(filtered); 
    }, [activeGenre]);
    
    return(
        <>
        {/* <Tabs variant='soft-rounded' colorScheme='orange'>
            <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
            </TabList>
        </Tabs> */}
        <div className="filter-container">
            <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>All</button>
            <button className={activeGenre === 35 ? "active" : ""} onClick={() => setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre === 28 ? "active" : ""} onClick={() => setActiveGenre(28)}>Action</button>
            <button className={activeGenre === 12 ? "active" : ""} onClick={() => setActiveGenre(12)}>Adventure</button>
        </div>
        </>
    )
}

export default Filter;