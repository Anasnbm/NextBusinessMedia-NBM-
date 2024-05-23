import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, Font } from '../../Theme/Colors'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { useNavigation } from '@react-navigation/native'

const TermAndConditon = () => {
    const navigation=useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.container,{marginTop:15}]}>
                <CustomHeader
                back={true} left={true} 
                OnPress={()=>navigation.goBack()}
               />
                <Text style={styles.Heading}>TermAndConditon</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.texT}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus magna vel risus dignissim, id ultricies lorem malesuada. Quisque vitae diam eu lacus feugiat pretium. Sed scelerisque dui nec nisi faucibus, at vestibulum velit tempor. Integer sed nibh sit amet nisi posuere malesuada. Nulla facilisi. Aliquam erat volutpat. Integer varius ultricies justo id laoreet. Curabitur sed semper dolor. Nullam ut accumsan arcu. Aliquam id leo non mi bibendum volutpat. Ut tristique consequat nulla. Nullam faucibus efficitur quam, non pharetra lectus lacinia at.

                        Fusce venenatis laoreet elit, nec egestas mi bibendum sed. Sed nec lacus sollicitudin, varius velit eget, ultricies risus. Mauris auctor, quam sit amet vehicula sagittis, felis lacus maximus lorem, nec vulputate metus mi sit amet mi. Aliquam erat volutpat. Vivamus scelerisque dolor sit amet libero euismod, vitae aliquet leo fermentum. Duis eleifend sagittis turpis, a efficitur odio. Donec auctor efficitur efficitur. Aliquam erat volutpat. Curabitur convallis varius massa at fermentum. Aliquam et dolor id ligula elementum rutrum id nec justo. Fusce efficitur enim non urna eleifend, vel fermentum ipsum egestas. In non placerat odio. Integer bibendum nec tortor eget sagittis. Proin nec viverra libero. Vestibulum fermentum mattis eros, at aliquam ligula eleifend ac.

                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non feugiat nisi. Integer sed sapien vitae neque convallis vestibulum. Nam et mauris at turpis consectetur scelerisque. Sed posuere placerat ex vitae luctus. Fusce a mi vitae tortor congue rhoncus non in quam. Aliquam erat volutpat. Donec ut nisi at nisi consequat fringilla nec ac arcu. Sed et lacus magna. Integer sit amet eros vitae turpis lobortis tempor at ut urna. Curabitur quis commodo est. Vestibulum ac dictum nunc. Mauris aliquet massa non eros efficitur, in pharetra libero tempus.

                        Vestibulum fermentum, enim vitae venenatis convallis, quam sapien scelerisque elit, ac scelerisque nulla nulla eget turpis. Integer sed ipsum nulla. Duis vitae mauris eu risus placerat condimentum. Pellentesque a augue eu purus sodales tincidunt id id eros. Curabitur sed dapibus urna. Integer auctor libero eu ante condimentum rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor neque sit amet sodales tempor. Sed a fringilla neque. Proin auctor ultricies lacus vel ultricies. Ut lobortis aliquam ante, sit amet placerat purus varius nec. Nullam semper justo et turpis varius, nec egestas odio dapibus. In in commodo libero.

                        Quisque varius elit id velit suscipit, ut suscipit arcu maximus. Vestibulum pharetra turpis at felis consectetur, nec iaculis nisl lacinia. Sed non justo id lorem vestibulum lobortis. Fusce vitae dui et mauris commodo varius. Curabitur fermentum, ligula nec ultrices dignissim, mi libero faucibus ligula, vitae feugiat odio mi at leo. Ut et consequat libero, in dapibus velit. Morbi faucibus justo magna, vitae sollicitudin lorem consequat ac. Nam luctus mauris eu magna dignissim convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus non odio elit. Curabitur sagittis mauris eget aliquet congue. Integer facilisis tristique tortor a tempor.

                        Sed nec odio


                    </Text>
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default TermAndConditon

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 15,
        
    },
    texT: {
        fontSize: 14,
        color: COLORS.black,
        fontFamily: Font.regular,
textAlign:"justify",
marginTop:20

    },
    Heading: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.black,
        fontFamily: Font.bold
    }
})