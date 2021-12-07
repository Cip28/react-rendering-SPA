import React from 'react'
import { CardItem } from './CardItem'
import './Card.css'
export default function Cards(props) {
    

    return (
        <div className="cards">
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="/media/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon."
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="/media/img-2.jpg"
                            text="Travel to the islands of Bali."
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">

                    <CardItem
                            src="/media/img-3.jpg"
                            text="Set Sail in the Atlantic Ocean vsiting Uncharted Waters"
                            label="Mystery"
                            path="/services"
                            />
                        <CardItem
                            src="/media/img-4.jpg"
                            text="Experience Football on top fo the Himalayan Mountains."
                            label="Adventure"
                            path="/services"
                            />
                        <CardItem
                            src="/media/img-8.jpg"
                            text="Ride through the Sahara Desert on a guided camel tour."
                            label="Adrenaline"
                            path="/services"
                            />
                    </ul>
                </div>
            </div>
        </div>
    )
}
