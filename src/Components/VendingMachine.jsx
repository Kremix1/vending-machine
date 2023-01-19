import { React, useState } from 'react';
import '../styles/vendingMachine.scss'
import { ControlPanel } from './ControlPanel';
import { GoodsWindow } from './GoodsWindow';

export const VendingMachine = (props) => {
    const [goods, setGoods] = useState([
        {
            name: 'Чипсы Pringles',
            price: 200,
            totalGoods: 10,
            id: 1,
        },
        {
            name: 'Mountain Dew',
            price: 100,
            totalGoods: 8,
            id: 2,
        },
        {
            name: 'Чипсы Lays',
            price: 110,
            totalGoods: 6,
            id: 3,
        },
        {
            name: 'Батончик "Snickers"',
            price: 70,
            totalGoods: 6,
            id: 4,
        },
        {
            name: 'Батончик "Bounty"',
            price: 80,
            totalGoods: 12,
            id: 5,
        },
        {
            name: 'Сок "Добрый"',
            price: 45,
            totalGoods: 4,
            id: 6,
        },
        {
            name: 'Вода "Святой Источник"',
            price: 30,
            totalGoods: 2,
            id: 7,
        },
        {
            name: 'Coca Cola',
            price: 60,
            totalGoods: 5,
            id: 8,
        },
    ])
    const [renderKey, setRenderKey] = useState(Math.random());
    const [userMoney, setUserMoney] = useState(0);
    const [vendingMoney, setVendingMoney] = useState(2500);
    const [shoppingCart, setShoppingCart] = useState(0);
    let moneyNominals = {
                    1000: Math.round(Math.random() * 20),
                    500: Math.round(Math.random() * 20), 
                    100: Math.round(Math.random() * 20), 
                    50: Math.round(Math.random() * 20), 
                    10: Math.round(Math.random() * 20), 
                    5: Math.round(Math.random() * 20), 
                    1: Math.round(Math.random() * 20)};
    console.log(moneyNominals)
    return(
        <>
        <div className='wrapper'>
            <div className='vending-machine'>
                <GoodsWindow 
                    key={renderKey}
                    goods={goods} 
                    setGoods={setGoods} 
                    shoppingCart={shoppingCart} 
                    setShoppingCart={setShoppingCart}
                    userMoney={userMoney}
                    setUserMoney={setUserMoney}
                />
                <ControlPanel 
                    goods={goods}
                    setGoods={setGoods} 
                    userMoney={userMoney} 
                    setUserMoney={setUserMoney}
                    shoppingCart={shoppingCart}
                    setRenderKey={setRenderKey}
                    moneyNominals={moneyNominals}

                    vendingMoney={vendingMoney} 
                    setVendingMoney={setVendingMoney}
                    
                />
            </div>
        </div>
        </>
    )
}