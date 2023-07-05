import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DocumentPicker from "react-native-document-picker";
import { TextInput } from 'react-native-gesture-handler';

const Document = () => {
    const [doc, setDoc] = useState();
    const [doc1, setDoc1] = useState();
    const [doc2, setDoc2] = useState();

    const SelectDOC = async () => {
        try {
            const doc = await DocumentPicker.pickSingle();
            setDoc(doc.type);
        } catch (err) {
            if (DocumentPicker.isCancel(err))
                setDoc("User cancelled the upload", err);
            console.log(err);
        }
    };

    const SelectDOC1 = async () => {
        try {
            const doc1 = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images]
            });
            setDoc1(doc1.type);
        } catch (err) {
            if (DocumentPicker.isCancel(err))
                setDoc1("User cancelled the upload", err);
            console.log(err);
        }
    };

    const SelectDOC2 = async () => {
        try {
            const doc2 = await DocumentPicker.pickSingle();
            setDoc2(doc2.type);
        } catch (err) {
            if (DocumentPicker.isCancel(err))
                setDoc2("User cancelled the upload", err);
            console.log(err);
        }
    };

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
                    marginTop: 10, marginLeft: 10, flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={SelectDOC}>
                        <View style={{
                            width: 100, height: 50, borderRadius: 10, borderWidth: 0.5, borderColor: "#757575",
                            marginLeft: 5, marginTop: 5, backgroundColor: '#ACC8E5', alignItems: 'center', justifyContent: 'center'
                        }}><Text style={{ color: '#000' }}>upload</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TextInput
                            value={doc}
                            numberOfLines={4}
                            style={{ color: doc ? "black" : "red" }}
                        />
                    </View>
                </View>

                <View style={{ marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 18, color: '#757575' }}>
                        Aadhar image upload (Back side)
                    </Text>
                </View>
                <View style={{
                    width: 320, height: 60, borderRadius: 10, borderWidth: 0.5, borderColor: "#757575",
                    marginTop: 10, marginLeft: 10, flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={SelectDOC1}>
                        <View style={{
                            width: 100, height: 50, borderRadius: 10, borderWidth: 0.5, borderColor: "#757575",
                            marginLeft: 5, marginTop: 5, backgroundColor: '#ACC8E5', alignItems: 'center', justifyContent: 'center'
                        }}><Text style={{ color: '#000' }}>upload</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TextInput
                            value={doc1}
                            numberOfLines={4}
                            style={{ color: doc1 ? "black" : "red" }}
                        />
                    </View>
                </View>
                <View style={{ marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 18, color: '#757575' }}>
                        PAN image upload (font side)
                    </Text>
                </View>
                <View style={{
                    width: 320, height: 60, borderRadius: 10, borderWidth: 0.5, borderColor: "#757575",
                    marginTop: 10, marginLeft: 10, flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={SelectDOC2}>
                        <View style={{
                            width: 100, height: 50, borderRadius: 10, borderWidth: 0.5, borderColor: "#757575",
                            marginLeft: 5, marginTop: 5, backgroundColor: '#ACC8E5', alignItems: 'center', justifyContent: 'center'
                        }}><Text style={{ color: '#000' }}>upload</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TextInput
                            value={doc2}
                            numberOfLines={4}
                            style={{ color: doc2 ? "black" : "red" }}
                        />
                    </View>
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
                        <Text style={{ fontSize: 15, color: '#000' }}>DOCUMENT SUBMIT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Document;
