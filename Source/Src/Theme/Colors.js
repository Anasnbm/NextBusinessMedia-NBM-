import { Platform,StyleSheet } from 'react-native';

export const COLORS = {
    white: "#fff",
    black: "#000000",
    blue:'#265FB1',
    red:'#FF0000',
    green:'#639900',
    primery:'#FFF0C9',

    faint:'#9e9e9e',
    primeryBlue:'#265FB1',
    secondry:'#58606A',
    placeHolderTextColor:'#D4D4D4',
    finext:'#D96f41',
    transport:'#EB2326'
    };

export const Font = {
    bold: 'Sagata Normal Sans-Bold',
    medium: 'SpaceGrotesk-Light',
    light: 'SpaceGrotesk-Medium',
    regular: 'Sagata Normal Sans-Regular',
    semibold: 'SpaceGrotesk-SemiBold',
};

  export const CommonStyles = StyleSheet.create({
    text: {
        fontFamily: Platform.OS === 'ios' ? Font.regular : Font.medium,
        fontSize: 14,
        color: COLORS.black,
    },
    boldText: {
        fontFamily: Font.bold,
        fontSize: 16,
        color: COLORS.black,
      
    },
});
