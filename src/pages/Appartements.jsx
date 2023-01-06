import React from 'react'
import Appart from '../partials/Appart'
import { getData } from '../utils/functions'


export default function Appartements() {
    return (
        <div className="container">
            <div className="row my-5 g-4">
                {
                    getData().map((item, key) => {
                        return <Appart
                            title={item.title}
                            price={item.price}
                            pieces={item.pieces}
                            image={item.image}
                            location={item.location}
                            id={item.id}
                            key={key}
                        />
                    })
                }
            </div>
        </div>
    )
}
