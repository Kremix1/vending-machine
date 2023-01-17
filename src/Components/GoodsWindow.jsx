import {React} from 'react';
import '../styles/goodsWindow.scss';
import { WindowItem } from './goodsWindow/windowItem';

export const GoodsWindow = (props) => {
    const addToShoppingCart = (itemPrice, itemName) => {
        props.setShoppingCart(props.shoppingCart + itemPrice)
        props.setGoods(
            props.goods.map(item =>
                item.name == itemName ? { ...item, ['totalGoods']: item.totalGoods - 1} : item
            )
        );
        console.log(props.shoppingCart)
    }
    return(
        <>
            <div className='goods-window'>
                {props.goods.map(item =>
                    <WindowItem 
                        key={item.id} 
                        name={item.name} 
                        totalGoods={item.totalGoods} 
                        price={item.price} 
                        actionHandler={addToShoppingCart}
                    />  
                )}
            </div>
        </>
    )
}
