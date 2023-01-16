import { React } from "react";
import ShopsListItem from "./ShopsListItem";

const LoadingShops = () => {
    const loadPages = [1, 2, 3]
    return (
        <div className="container px-4 mx-auto">
            {loadPages.map(num => {return <ShopsListItem />})}
        </div>
    );
}

export default LoadingShops
