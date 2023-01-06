import React from 'react'
import { useParams } from 'react-router-dom'
import { getDetail } from '../utils/functions';


export default function Detail() {
    let { id } = useParams()
    console.log(getDetail(id));
    return (
        <div>Detail</div>
    )
}
