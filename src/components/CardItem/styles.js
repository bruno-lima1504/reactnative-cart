import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px 14px;
    border-width: 1px;
    border-color: #DFDFDF;
    margin-bottom: 5px;
`

export const ProductView = styled.View`
    
`

export const ProductName = styled.Text`
    margin-bottom: 5px;
    font-weight: bold; 
    font-size: 18px;
`

export const ProductPrice = styled.Text`
   font-size: 16px;
`

export const AmountContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const RemoveItemButton = styled.TouchableOpacity`
    background-color: #168fff;
    padding: 6px;
    padding-left: 14px;
    padding-right: 14px;
    border-radius: 2px;
`

export const AddItemButton = styled.TouchableOpacity`
    background-color: #168fff;
    padding: 6px;
    padding-left: 14px;
    padding-right: 14px;
    border-radius: 2px;
`
export const ButtonText = styled.Text`
   font-size: 22px;
   font-weight: bold;
`
export const Amount = styled.Text`
  margin-left: 14px;
  margin-right: 14px;
`





