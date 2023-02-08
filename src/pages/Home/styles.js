import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
    flex: 1 ;     
    background-color: #FAFAFA;
    padding-left: 14px;
    padding-right: 14px;
`
export const HeaderContainer = styled.View`   
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 24px;
`
export const Title = styled.Text`   
    font-size: 24px;
    font-weight: bold;
`
export const CartButton = styled.TouchableOpacity`   
    
`

export const Dot = styled.View`   
    align-items: center;
    justify-content: center;
    background-color: red;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    position: absolute;
    z-index: 99;
    bottom: -2px;
    left: -4px;
`

export const DotText = styled.Text`   
    font-size: 12px;
    font-weight: bold;
`
 export const ProductList = styled.FlatList`
 `
export const TotalText = styled.Text`   
font-size: 12px;
font-weight: bold;
`
