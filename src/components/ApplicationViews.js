import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"


export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/Locations">
                <LocationList />
            </Route>
            
            
            <Route path="/Products">
                <ProductList />
            </Route>

        </>
    )

}