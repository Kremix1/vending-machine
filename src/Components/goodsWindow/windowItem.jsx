import {React} from 'react';

export const WindowItem = (props) => {
    if(props.totalGoods !== 0)
        return(
            <>
            <div className='goods-window__goods-item' onClick={() => props.actionHandler(props.price, props.name)}>
                <div className='goods-item__pic'></div>
                <div className='goods-item__name'>{props.name}</div>
                <div className='goods-item__total'>Осталось: {props.totalGoods}</div>
                <div className='goods-item__price'>Цена: {props.price}</div>
            </div>
            </>
        )
    return(
        <>
            <div className='goods-window__goods-item goods-item__empty' onClick={() => props.actionHandler(props.price, props.name)}>
                <div className='goods-item__pic'></div>
                <div className='goods-item__name'>{props.name}</div>
                <div className='goods-item__total'>Товар закончился</div>
                <div className='goods-item__price'>Цена: {props.price}</div>
            </div>
        </>
    )
}