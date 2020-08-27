import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func, // ptf viết tắt
};

function TodoForm(props) {
    const { onSubmit } = props;

    const [value, setValue] = useState('');

    function handleValueChange(e) {
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        // prevent reloading browser
        e.preventDefault();

        if (!onSubmit) return;//neu chua co props onSubmit
        const formValue = {
            title: value,
        };
        onSubmit(formValue);

        //Reset form
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={handleValueChange}
            />
        </form>
    );
}

export default TodoForm;