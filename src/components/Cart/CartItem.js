import React from 'react'
import { useDispatch } from 'react-redux';
import { ADD_ITEM, REMOVE_FROM_CART, SUBTRACT_ITEM } from '../../redux/types/CartType';

export default function CartItem(props) {
    const { item } = props;
    const dispatch = useDispatch();

    return (
        <div className="cart__item flex">
            <div className="cart__item__left w-2/5" style={{ backgroundColor: `${item.color}`, width: '90px', height: '90px', borderRadius: '100%' }}>
                <div className="card__item__img animate__animated animate__zoomIn">
                    <img src={item.image} alt={item.name} />
                </div>
            </div>
            <div className="cart__item__right w-3/5">
                <h1 className="animate__animated animate__slideInRight animate__faster animate__delay-1s">{item.name}</h1>
                <p className="animate__animated animate__slideInRight animate__fast animate__delay-1s">${item.price}</p>
                <div className="cart__item__actions flex justify-between items-center animate__animated animate__slideInRight animate__fast animate__delay-1s">
                    <div className="cart__item__count flex items-center">
                        <button className="cart__count__button" onClick={() => {
                            dispatch({
                                type: SUBTRACT_ITEM,
                                id: item.id
                            })
                        }}>
                            <img src="./assets/images/minus.png" alt="..." width={8} height={8} />
                        </button>
                        <span className="text-center">{item.amount}</span>
                        <button className="cart__count__button" onClick={() => {
                            dispatch({
                                type: ADD_ITEM,
                                id: item.id
                            })
                        }}>
                            <img src="./assets/images/plus.png" alt="..." width={8} height={8} />
                        </button>
                    </div>
                    <button className="cart__remove__button" onClick={() => {
                        dispatch({
                            type: REMOVE_FROM_CART,
                            id: item.id
                        })
                    }}>
                        <img src="./assets/images/trash.png" alt="..." width={16} height={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}
