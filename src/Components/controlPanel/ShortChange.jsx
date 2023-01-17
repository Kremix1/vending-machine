import React from 'react';

export const ShortChange = (props) => {
    return(
        <>
            <div className='control-panel__title'>Сдача:</div>
            <div className='control-panel__short-change'>{props.shortChange}</div>
        </>
    )
}