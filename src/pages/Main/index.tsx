import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPhoto } from "../../reguest";
import { photoTypes } from "../../types";
import './style.sass';
import { useNavigate } from 'react-router-dom';

const Main: React.FC = () => {
    const [listPhoto, setListPhoto] = useState<Array<photoTypes>>();
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        (async ()=>{
            let getPhotoList = await getPhoto();
            if (getPhotoList) setLoader(false);
            getPhotoList.forEach((value: photoTypes)=>{
                switch (true) {
                    case (value.id <= 6) : value.type = 'firstType'; break;
                    case (value.id > 6 && value.id < 13) : value.type = 'twoType'; break;
                    case (value.id > 12 && value.id < 19) : value.type = 'threeType'; break;
                    case (value.id > 18 && value.id < 25) : value.type = 'fourType'; break;
                }
            })
            const newArrayPhoto: any = []
            let firstType = {type: 'firstType', elements: getPhotoList.filter((p: { type: string; }) => p.type === 'firstType')}
            let twoType = {type: 'twoType', elements: getPhotoList.filter((p: { type: string; }) => p.type === 'twoType')}
            let threeType = {type: 'threeType', elements: getPhotoList.filter((p: { type: string; }) => p.type === 'threeType')}
            let fourType = {type: 'fourType', elements: getPhotoList.filter((p: { type: string; }) => p.type === 'fourType')}
            newArrayPhoto.push(firstType, twoType, threeType, fourType)
            setListPhoto(newArrayPhoto);
        })()
    },[])

    const informationPhoto = (index: number, valuePhoto: any) => {
        listPhoto?.forEach((value: any)=>{
                value.elements.forEach((val: photoTypes, indexList: number)=>{
                    if (valuePhoto.type === val.type && indexList === index){
                        navigate(`/information/${val.id}`)
                    }
            })
        })
    }
    return (
        <div>
            <Header />
            <div className="main_photo">
                        {
                            listPhoto?.map((value: any)=>
                                <>
                                    <p>{value.type}</p>
                                    <div className="main_photo-flex">
                                        {value.elements.map((valuePhoto:photoTypes, index: number)=>
                                            <>
                                                <img onClick={()=>informationPhoto(index, valuePhoto)} src={valuePhoto.thumbnailUrl} />
                                            </>
                                        )}
                                    </div>
                                </>
                            )
                        }
                        {loader &&
                            <div className="lds-dual-ring"></div>
                        }
            </div>
        </div>
    );
};

export default Main;