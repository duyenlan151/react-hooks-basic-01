import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './ColorBox.scss';

// ColorBox.propTypes = {

// };
// Do độc lập vs component hiện tại nên có thể viết bên ngoài
// có thể tách ra 1 file
function getRandomColor() {
    const COLOR_LIST = ['#4ea0ae', '#519872', '#fddb3a', '#5eaaa8', '#ea5455'];
    const randomIndex = Math.trunc(Math.random() * 5);// 0 -> 4
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    // lấy giá trị từ localStorage làm initialState thay vi set deeppink
    //const [color, setColor] = useState('deeppink');
    //const initColor = localStorage.getItem('box-color') || 'deeppink';
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deeppink';

        return initColor;
    });

    function handleBoxClick() {
        //get random color -> setColor
        const newColor = getRandomColor();
        setColor(newColor);

        // lưu giá trị màu xuống localStorage
        localStorage.setItem('box-color', newColor);
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            {/* Color box */}
        </div>
    );
}

export default ColorBox;
