import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {DocumentPicker} from "react-native-document-picker";

const Document = (onPress) => {
    const SelectDOC = async () => {
        try {
            const doc = await DocumentPicker.pick();
            console.log(doc)
        }
        catch (err) {
            if ((e))
                console.log("user cancelled the upload", e)
            else
                console.log(err)

        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#d6e4f2' }}>
            <View style={{ alignSelf: 'center' }}>
                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <Text style={{ fontSize: 25, color: '#000' }}>Documents verification</Text>
                </View>
                <View style={{ marginLeft: 20, marginTop: 20 }}>
                    <Text style={{ fontSize: 18, color: '#757575' }}>
                        Aadhar image upload (font side)
                    </Text>
                </View>

                <View style={{
                    width: 320, height: 60, borderRadius: 10, borderWidth: 0.5, borderColor: "#757575",
                    marginTop: 10, marginLeft: 10
                }}>
                    <TouchableOpacity>
                        <View style={{
                            width: 100, height: 50, borderRadius: 10, borderWidth: 0.5, borderColor: "#757575",
                            marginLeft: 5, marginTop: 5, backgroundColor: '#ACC8E5', alignItems: 'center', justifyContent: 'center'
                        }}><Text style={{ color: '#000' }}>upload</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 18, color: '#757575' }}>
                        Aadhar image upload (Back side)
                    </Text>
                </View>
                <View style={{
                    width: 320, height: 60, borderRadius: 10, borderWidth: 0.5, borderColor: "#757575",
                    marginTop: 20, marginLeft: 10
                }}>
                    <TouchableOpacity>
                        <View style={{
                            width: 100, height: 50, borderRadius: 10, borderWidth: 0.5, borderColor: "#757575",
                            marginLeft: 5, marginTop: 5, backgroundColor: '#ACC8E5', alignItems: 'center', justifyContent: 'center'
                        }}><Text style={{ color: '#000' }}>upload</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 18, color: '#757575' }}>
                        PAN image upload (font side)
                    </Text>
                </View>
                <View style={{
                    width: 320, height: 60, borderRadius: 10, borderWidth: 0.5, borderColor: "#757575",
                    marginTop: 20, marginLeft: 10
                }}>
                    <TouchableOpacity onPress={SelectDOC}>
                        <View style={{
                            width: 100, height: 50, borderRadius: 10, borderWidth: 0.5, borderColor: "#757575",
                            marginLeft: 5, marginTop: 5, backgroundColor: '#ACC8E5', alignItems: 'center', justifyContent: 'center'
                        }}><Text style={{ color: '#000' }}>upload</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={console.log("lelo")}>
                    <View
                        style={{
                            width: 320,
                            height: 50,
                            borderRadius: 5,
                            borderWidth: 0.5,
                            borderColor: "#757575",
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 80,
                            alignSelf: 'center',
                            backgroundColor: '#ACC8E5',
                        }}
                    >
                        <Text style={{ fontSize: 15, color: '#000' }}>SUBMIT OTP</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Document