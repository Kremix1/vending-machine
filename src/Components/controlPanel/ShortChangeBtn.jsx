import React from 'react';

export const ShortChangeBtn = (props) => {
    return(
        <>
            <div className='control-panel__short-change-btn' onClick={() => props.analyzeMoney()}>Получить сдачу</div>
        </>
    )
}