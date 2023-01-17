import {React} from 'react';

export const TotalMoney = (props) => {
    return(
        <>
            <div className='control-panel__title'>Внесенные деньги:</div>
            <div className='control-panel__total-money'>{props.total}</div>
        </>
    )
}