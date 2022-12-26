import { React } from "react";
import RetailorsListItem from "./RetailorsListItem";

const LoadingRetailors = () => {
    const loadPages = [1, 2, 3]
    return (
        <div className="container px-4 mx-auto">
            {loadPages.map(num => {return <RetailorsListItem />})}
        </div>
    );
}

export default LoadingRetailors
