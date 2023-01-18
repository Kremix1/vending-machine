import {React} from 'react';

export const MoneyButton = (props) => {
    const addMoney = () => {
        if(props.money + props.nominal > 5000){
            alert('Вы ввели 5000, это максимальная сумма, закажите что-нибудь')
            //Максимальная сумма
            return;
        }
        props.setVisibility('control-panel__short-change hidden')
        props.setMoney(props.money + props.nominal)
        //props.moneyNominals[props.nominal] = moneyNominals
        props.moneyNominals[props.nominal] += 1;
    }
    return(
        <>
            <div className='control-panel__money-button' onClick={() => addMoney()}>{props.nominal}</div>
        </>
    )
}