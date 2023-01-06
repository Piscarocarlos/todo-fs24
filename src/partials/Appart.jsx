import React from 'react'
import { Link } from 'react-router-dom'

export default function Appart({ image, title, price, location, pieces, id }) {
    return (
        <div className="col-md-3">
            <div className="card mx-2" style={{ width: "1OO%" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="text-danger">{price} DH</h6>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">{location}</p>
                        <p>Pieces : {pieces}</p>
                    </div>
                    <Link to={`/detail/${id}`} className="btn btn-dark w-100">Détails</Link>
                </div>
            </div>
        </div>
    )
}
