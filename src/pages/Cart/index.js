import React, { useContext } from "react";
import { Text, View } from "react-native";
import { CartContext } from '../../contexts/CartContext'

import * as C from './styles'

import CardItem from "../../components/CardItem";

export default function Cart(){
    const {cart, addItemCart, removeItemCart, total } = useContext(CartContext);
    
    
    return(
        <C.Container>
            <C.CartList 
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={ (item) => String(item.id) }
                ListEmptyComponent={() => <Text
                                                style={{fontSize: 20,
                                                        fontWeight: 'bold', 
                                                        textAlign: 'center',
                                                        marginBottom: 20}}>
                                                        Carrinho Vazio...
                                            </Text>}
                renderItem={ ({ item }) => 
                    <CardItem 
                        data={item} 
                        addAmount={ () => addItemCart(item)}
                        removeAmount={() => removeItemCart(item)}  />}
                ListFooterComponent={ () => <View 
                                                style={{alignItems: 'center',
                                                        padding: 8,
                                                        width: '50%',
                                                        marginLeft: '50%',
                                                        backgroundColor: '#A9A9A9',
                                                        borderRadius: 5,
                                                        }}>
                                                    <Text 
                                                        style={{fontSize: 20,
                                                                fontWeight: 'bold',                             
                                                    }}>
                                                        Total R$ {total}
                                                    </Text>
                                            </View>}
            />
        </C.Container>
    )
}