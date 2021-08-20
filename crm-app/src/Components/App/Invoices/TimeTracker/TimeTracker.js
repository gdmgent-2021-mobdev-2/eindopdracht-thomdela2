import React, { useState, useEffect, useRef } from 'react';
import { Button, Input } from '../../../Design/System';

const TimeTracker = () => {

    const [hours, setHours] = useState('');
    const inputRef = useRef();

    // run over component, afterwards focus on #hours element
    useEffect(() => {
        // focus on inputref
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // handle the changed hours
    const handleHoursChange = (e) => {
        setHours(e.target.value);
    };

    // decrement counter
    const handleDecrementClick = () => {

    };

    // increment counter
    const handleIncrementClick = () => {
        
    };

    return (
        <>
            <form>
                <Button onClick={handleDecrementClick}>-</Button>
                <Input type="number" 
                        ref={inputRef}
                        value={hours} 
                        name="hours"
                        onChange={handleHoursChange}
                    />
                <Button onClick={handleIncrementClick}>+</Button>
                <Button type="submit">Save</Button>
            </form>
        </>
    )
}

export default TimeTracker;