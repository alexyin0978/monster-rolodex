import React from "react";
import './SearchBox.css'

export const SearchBox = ({onSearchChange, placeholder}) => {
    return(
        <div>
            <input
                className="search"
                type="search" 
                placeholder= {placeholder} /* 將placeholder內容在App.js裡定義 */
                onChange={ onSearchChange}/> 
        </div>
    )
}