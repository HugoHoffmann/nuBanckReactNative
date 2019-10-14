import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  margin: 0 30px;
`;

export const Code = styled.View`
    background: #fff;
    padding: 10px;
    align-self: center;
`;

export const Nav = styled.View`
    margin-top: 30px;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255, 255, 255, 0.8);
`;
export const NavItem = styled.View``;
export const NavText = styled.Text``;
