import React, { useState, useContext } from "react";

import { useNavigation } from "@react-navigation/native";

import * as C from './styles'
import { Feather } from '@expo/vector-icons'

import Product from "../../components/Product";

import { CartContext } from "../../contexts/CartContext";

export default function Home(){    
    const navigation = useNavigation();
    const [products, setProducts] = useState([
        {
            id: '1',
            name: "Coca cola",
            price: 19.90
          },
          {
            id: '2',
            name: "Chocolate",
            price: 6.50
          },
          {
            id: '4',
            name: "Queijo 500g",
            price: 15
          },
          {
            id: '5',
            name: "Batata frita",
            price: 23.90
          },
          {
            id: '6',
            name: "Guarana lata",
            price: 6.00
          }
    ]);
    
    const { cart, addItemCart } = useContext(CartContext)

    function handleAddCart(item){
      addItemCart(item)
    }

    return(
        
            <C.SafeContainer>
                <C.HeaderContainer>
                    <C.Title>Lista de produtos</C.Title>
                    <C.CartButton onPress={ () => navigation.navigate("Cart")}>
                      {cart.length >= 1 && (
                        <C.Dot>
                            <C.DotText>{cart?.length}</C.DotText>
                        </C.Dot>)}
                        
                        <Feather 
                            name="shopping-cart" 
                            size={30} 
                            color="#000"
                        />
                    </C.CartButton>                   
                </C.HeaderContainer>

                <C.ProductList 
                        data={products}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={ ({item}) => <Product data={item} addToCart={() => handleAddCart(item) } /> }
                />

            </C.SafeContainer>
        
    )
}