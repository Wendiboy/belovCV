import * as axios from 'axios';
import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import {setCurrentPage, setPhotos, setTotalCount} from "../../../redux/photos-reducer";
import Photos from "./Photos.jsx";

const PhotosContainer = () => {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photosPage.photos)
    const currentPage = useSelector(state => state.photosPage.currentPage)
    const totalCount = useSelector(state => state.photosPage.totalCount)
    const [fetching, setFetching] = useState(true)


    useEffect(()=>{
        if (fetching){
            axios.get(`https://picsum.photos/v2/list`).then(response =>{
                let newPhotosArray = photos
                response.data.map(ep => newPhotosArray.push(ep.download_url))
                dispatch(setPhotos(newPhotosArray))
                dispatch(setCurrentPage(currentPage + 1))
                dispatch(setTotalCount(9999))
            })
                .finally(() => setFetching(false));

        }
    }, [fetching])


    return(
        <Photos photos={photos}/>
    )
}

export default PhotosContainer