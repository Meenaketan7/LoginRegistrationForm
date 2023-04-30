import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = () => {
  return (
    <SafeAreaView style={{padding: Spacing * 2}}>
      {/* Title */}
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: FontSize.xLarge,
            color: Colors.purple,
            fontWeight: 'bold',
            marginVertical: 30,
          }}>
          Create Account
        </Text>
        <Text
          style={{
            fontWeight: 600,
            fontSize: FontSize.small,
            maxWidth: '80%',
            textAlign: 'center',
          }}>
          Create an account so you can explore all the existing jobs
        </Text>
      </View>

      {/* Input Field */}
      <View
        style={{
          marginVertical: Spacing * 3,
        }}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={Colors.darkText}
          style={{
            fontSize: FontSize.small,
            padding: Spacing * 2,
            backgroundColor: Colors.lightPurple,
            borderRadius: Spacing,
            marginVertical: Spacing,
          }}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.darkText}
          secureTextEntry
          style={{
            fontSize: FontSize.small,
            padding: Spacing * 2,
            backgroundColor: Colors.lightPurple,
            borderRadius: Spacing,
            marginVertical: Spacing,
          }}
        />

        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor={Colors.darkText}
          secureTextEntry
          style={{
            fontSize: FontSize.small,
            padding: Spacing * 2,
            backgroundColor: Colors.lightPurple,
            borderRadius: Spacing,
            marginVertical: Spacing,
          }}
        />
      </View>

      {/* Button */}
      <TouchableOpacity
        onPress={() => 'Login'}
        style={{
          padding: Spacing * 2,
          backgroundColor: Colors.purple,
          marginVertical: Spacing * 2,
          borderRadius: Spacing,
          shadowColor: Colors.purple,
          shadowOffset: {
            width: 0,
            height: Spacing,
          },
          shadowOpacity: 0.3,
          shadowRadius: Spacing,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: Colors.onPrimary,
            alignSelf: 'center',
            fontSize: FontSize.large,
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      {/* Footer */}

      <TouchableOpacity
        style={{
          padding: Spacing,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: Colors.text,
            alignSelf: 'center',
            fontSize: FontSize.small,
          }}>
          Already have an account
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginVertical: Spacing * 2,
        }}>
        <Text
          style={{
            fontWeight: 600,
            fontSize: FontSize.small,
            color: Colors.purple,
            alignSelf: 'center',
          }}>
          or Connect with
        </Text>
      </View>

      <View
        style={{
          padding: Spacing,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            padding: Spacing,
            backgroundColor: Colors.gray,
            borderRadius: Spacing / 2,
            marginHorizontal: Spacing,
          }}>
          <Image
            source={require('../../assets/images/Google1.png')}
            size={Spacing * 2}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: Spacing,
            backgroundColor: Colors.gray,
            borderRadius: Spacing / 2,
            marginHorizontal: Spacing,
          }}>
          <Image
            source={require('../../assets/images/facebook.png')}
            size={Spacing * 2}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: Spacing,
            backgroundColor: Colors.gray,
            borderRadius: Spacing / 2,
            marginHorizontal: Spacing,
          }}>
          <Image
            source={require('../../assets/images/apple.png')}
            size={Spacing * 2}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
