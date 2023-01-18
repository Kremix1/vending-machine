import {React} from 'react';
import { useAlert } from 'react-alert';
import '../styles/goodsWindow.scss';
import { WindowItem } from './goodsWindow/windowItem';

export const GoodsWindow = (props) => {
    const alert = useAlert()
    const addToShoppingCart = (itemPrice, itemName) => {
        for(let i = 0; i < props.goods.length; i++){
            if(props.goods[i].name !== itemName)
                continue;
            if(props.userMoney < itemPrice){
                //Ошибка нехватки денег у пользователя
                alert.show('Внесите необходимое количество рублей')
                return;
            }
            if(props.goods[i].totalGoods === 0){
                alert.show('Товар закончился')
                //Ошибка нехватки товара
                return;
            }
            props.setUserMoney(props.userMoney - itemPrice)
        }
        props.setShoppingCart(props.shoppingCart + itemPrice)
        props.setGoods(
            props.goods.map(item =>
                (item.name === itemName && item.totalGoods > 0) ? { ...item, ['totalGoods']: item.totalGoods - 1} : item
            )
        ); 
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
