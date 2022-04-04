import { useEffect, useState } from "react"



const useReviews = () =>{
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[reviews])
    console.log(reviews);
    return [reviews,setReviews]
}

export default useReviews;