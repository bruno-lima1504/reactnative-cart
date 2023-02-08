import React, {useState} from "react";
import { CartContext } from '../../contexts/CartContext'

import * as C from './styles'



export default function CardItem({ data, addAmount, removeAmount }){    
    const [amount, setAmount] = useState(data?.amount)

    function handleIncrease(){
        addAmount();
        setAmount(item => item + 1)
    }

    function handleDecrease(){
        removeAmount();
        if(amount === 0){
            setAmount(0);
            return;
        }

        setAmount(item => item - 1)
    }

    return(
        <C.Container>
            <C.ProductView>
                <C.ProductName>{data.name}</C.ProductName>
                <C.ProductPrice>R$ {data.price}</C.ProductPrice>
            </C.ProductView>

            <C.AmountContainer>
                <C.RemoveItemButton onPress={handleDecrease}>
                    <C.ButtonText>-</C.ButtonText>
                </C.RemoveItemButton>
                <C.Amount>{amount}</C.Amount>
                <C.AddItemButton onPress={handleIncrease}>
                    <C.ButtonText >+</C.ButtonText>
                </C.AddItemButton>
            </C.AmountContainer>
        </C.Container>
    )
}