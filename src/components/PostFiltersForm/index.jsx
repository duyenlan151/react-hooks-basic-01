import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PostList from '../PostList';
import { useRef } from 'react';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null
}

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');

    // luu bien tam giu nguyen gia tri sau moi lan render  
    const typingTimeoutRef = useRef(null);
    // userRef giup tao ra 1 object, gia tri se khong bi thay doi giua nhung lan render

    function handleSearchFormChange(e) {
        const value = e.target.value;
        setSearchTerm(e.target.value);
        if (!onSubmit) return;

        // SET -- 100 -- CLEAR, SET -- 300 --> SUBMIT
        // SET -- 300 --> SUBMIT
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        // kỹ thuật debounce
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues);
        }, 300);
        // const formValues = {
        //     searchTerm
        // }
        // onSubmit(formValues);
    }

    return (
        <form>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchFormChange}
            />
        </form>
    );
}

export default PostFilterForm;