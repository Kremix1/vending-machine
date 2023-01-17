import {React} from 'react';

export const MoneyButton = (props) => {
    const addMoney = () => {
        props.setMoney(props.money + props.nominal)
    }
    return(
        <>
            <div className='control-panel__money-button' onClick={() => addMoney()}>{props.nominal}</div>
        </>
    )
}