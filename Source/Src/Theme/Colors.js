import { Platform,StyleSheet } from 'react-native';

export const COLORS = {
    white: "#fff",
    black: "#000000",
    blue:'#4287f5',
    red:'#FF0000',
    green:'#30ee00'
    };

export const Font = {
    bold: 'SpaceGrotesk-Bold',
    medium: 'SpaceGrotesk-Light',
    light: 'SpaceGrotesk-Medium',
    regular: 'SpaceGrotesk-Regular',
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
        fontSize: 18,
        color: COLORS.black,
      
    },
});
