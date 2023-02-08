import React from "react";

import * as C from './style'

export default function Product({ data, addToCart }){
    return(
        <C.Container>
            
            <C.ProductView>
                <C.ProductName>{data.name}</C.ProductName>
                <C.ProductPrice>R$ {data.price}</C.ProductPrice>
            </C.ProductView>

            <C.ButtonAdd onPress={addToCart}>
                <C.ButtonAddText>+</C.ButtonAddText>
            </C.ButtonAdd>

        </C.Container>
    )
}