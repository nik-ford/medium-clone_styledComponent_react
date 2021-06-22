import { createGlobalStyle } from 'styled-components';

import LoraVariable from './LoraVariable.ttf'
import PlayfairDisplay from './PlayfairDisplay.ttf'



export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${LoraVariable}) format('ttf'),
        url(${PlayfairDisplay}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;