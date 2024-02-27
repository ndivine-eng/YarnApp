import react from "react";
import { View, Text, Button, TouchableOpacity, TextInput } from "react-native";
import { useState } from 'react';

export default function CurrencyConverter(){

    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');
    const convertCurrency = () => {
     
      const converted = parseFloat(amount) * 5; 
      setConvertedAmount(converted.toFixed(2));
    };
    return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 50 }}>Enter the currency you want to convert</Text>

            <View>
                <TextInput
                    placeholder="Enter the amount"
                    value={amount}
                    onChangeText={text => setAmount(text)}
                    keyboardType="numeric"
                    style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginTop: 20, width: 200, height: 50 }}
                />
                <TouchableOpacity onPress={convertCurrency}>
                    <Text style={{ backgroundColor: 'gray', color: 'white', padding: 10, marginTop: 10, borderRadius: 5, width: 200, height: 50 }}>Convert</Text>
                </TouchableOpacity>
            </View>
            {convertedAmount !== '' && (
                <Text style={{ fontSize: 20, marginTop: 20 }}>Converted Amount: {convertedAmount}</Text>
            )}
        
        </View>
    );
}