import { React, useState } from 'react';
import '../styles/vendingMachine.scss'
import { ControlPanel } from './ControlPanel';
import { GoodsWindow } from './GoodsWindow';

export const VendingMachine = () => {
    const [goods, setGoods] = useState([
        {
            name: 'Чипсы Pringles',
            price: 200,
            totalGoods: 10,
        },
        {
            name: 'Mountain Dew',
            price: 100,
            totalGoods: 8,
        },
        {
            name: 'Чипсы Lays',
            price: 110,
            totalGoods: 6,
        },
        {
            name: 'Батончик "Snickers"',
            price: 70,
            totalGoods: 6,
        },
        {
            name: 'Батончик "Bounty"',
            price: 80,
            totalGoods: 12,
        },
        {
            name: 'Сок "Добрый"',
            price: 45,
            totalGoods: 4,
        },
        {
            name: 'Вода "Святой Источник"',
            price: 30,
            totalGoods: 2,
        },
        {
            name: 'Coca Cola',
            price: 60,
            totalGoods: 5,
        },
    ])
    const [userMoney, setUserMoney] = useState(0);
    const [vendingMoney, setVendingMoney] = useState(1000);
    const [shoppingCart, setShoppingCart] = useState(0);
    return(
        <>
        <div className='wrapper'>
            <div className='vending-machine'>
                <GoodsWindow goods={goods} setGoods={setGoods} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
                <ControlPanel 
                    goods={goods} 
                    setGoods={setGoods} 
                    money={userMoney} 
                    setMoney={setUserMoney} 
                    vendingMoney={vendingMoney} 
                    setVendingMoney={setVendingMoney}
                    shoppingCart={shoppingCart}
                />
            </div>
        </div>
        </>
    )
}