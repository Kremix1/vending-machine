import {React, useState} from 'react';
import '../styles/controlPanel.scss';
import { TotalMoney } from './controlPanel/TotalMoney';
import { MoneyButton } from './controlPanel/MoneyButton';
import { ShortChange } from './controlPanel/ShortChange';
import { ShortChangeBtn } from './controlPanel/ShortChangeBtn';

export const ControlPanel = (props) => {
    const [shortChange, setShortChange] = useState(0);
    const analyzeMoney = () => {
        //Сюда валидация, если пользователя кончились
        setShortChange(props.money - props.shoppingCart)
        console.log(shortChange)
    }
    const giveShortBack = () => {
        //Сюда валидация, если нет столько денег в автомате, сколько требуется, для сдачи
    }
    const moneyButtons = [50, 100, 500, 1000]
    return(
        <>
            <div className='control-panel'>
                <TotalMoney total={props.money}/>
                {moneyButtons.map(item => 
                    <MoneyButton nominal={item} money={props.money} setMoney={props.setMoney}/>    
                )}
                <ShortChange shortChange={shortChange}/>
                <ShortChangeBtn analyzeMoney={analyzeMoney}/>
            </div>
        </>
    )
}