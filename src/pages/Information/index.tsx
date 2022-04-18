import React, { useEffect, useState } from 'react';
import { getPhotoInformation } from "../../reguest";
import { photoTypes } from "../../types";
import './style.sass'
import Header from "../../components/Header";

const Information: React.FC = () => {
    const [informationPhoto, setInformationPhoto] = useState<Array<photoTypes>>();
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        (async ()=>{
            let getLocation = window.location.toString().split("/")[4]
            let getInformationList = await getPhotoInformation(getLocation)
            if (getInformationList) setLoader(false);
            setInformationPhoto(getInformationList)
        })()
    },[])
    return (
        <>
            <Header />
            <div className='information'>
                <a href='/'>Back</a>
                {informationPhoto?.map((value)=>
                    <>
                        <img src={value.thumbnailUrl} />
                        <p>{value.title}</p>
                        <a href={value.url}>{value.url}</a>
                    </>
                )}
                {loader &&
                    <div className="lds-dual-ring"></div>
                }
            </div>
        </>
    );
};

export default Information;