import React from "react"
import "./Location.css"

export const LocationCard = ({location}) => (
    <section className="location">
        <div className="location__address">{location.address}</div>
        <div className="location__size">{location.size}</div>
        <div className="accessibility">{location.accessibility}</div>
    </section>  
)
