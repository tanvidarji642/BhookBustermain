import React from 'react';
import { itemData } from '../data'; // Fixed import path

const YourComponent = () => {
    return (
        <div>
            {itemData.map((item, index) => (
                <img key={index} src={item.item_img} alt={`Item ${index}`} />
            ))}
        </div>
    );
};

export default YourComponent;
