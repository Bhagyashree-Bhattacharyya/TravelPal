import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import { Navbar, HotelCard } from "../../components";

import "./Home.css";

export const Home = () => {

    const [hasMore, setHasMore] = useState(true);
    const [testData, setTestData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(16);

    const[hotels, setHotels] = useState([]);

    useEffect(() => {
        (async () => {
            try{
                const {data} = await axios.get("http://localhost:3050/api/hotels");
                setTestData(data);
                setHotels(data ? data.slice(0, 16) : []);
            } catch(error) {
                console.log(error);
            }
        })();
    }, []);

    const fetchMoreData = () => {
        if (hotels.length >= testData.length){
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            if (hotels && hotels.length > 0) {
                setHotels(hotels.concat(testData.slice(currentIndex, currentIndex+16)));
                setCurrentIndex(prev => prev+16);
            } else {
                setHotels([]);
            }
        }, 1000);
    };

    return (
        <Fragment>
            <Navbar/>
            {/* <main className="main d-flex align-center gap-larger"> */}
                {/* {
                    hotels && hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel}/>)
                } */}
                { 
                    hotels && hotels.length > 0 ? (
                        <InfiniteScroll
                            dataLength={hotels.length}
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={hotels.length > 0 && <h4 className="alert-text">Loading...</h4>}
                            endMessage={<h4 className="alert-text">That's All !!</h4>}
                        >
                            <main className="main d-flex align-center gap-larger">
                                {
                                    hotels && hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel}/>)
                                }
                            </main>
                        </InfiniteScroll>
                    ) : (<></>)
                }
             {/* </main> */}
        </Fragment>
    )
};