import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import styles from './DoctorLoginStyles';
import { CheckBox } from 'react-native-elements';
import { COLORS, PADDINGS } from '../../../../src/constants/Constants';
import Reusabletextinput from '../../../../src/components/AppTextinput/AppTextinput';
import { TextInput } from 'react-native-paper';
import GeneralButton from '../../../../src/components/GeneralButton/GeneralButton';
import { useSelector, useDispatch } from 'react-redux';

import { useForm, Controller } from 'react-hook-form';
import LoginWithG from '../../utils/LoginWithG';
import { HeaderNavigation } from '../../../../src/components/headerNavigation/HeaderNavigation';
import { setLoggedIn } from '../../../../src/Redux/Reducers/AuthSlice';
import { RFValue } from 'react-native-responsive-fontsize';
import { loginUser } from '../../../../src/Redux/Reducers/LoginSlice';
import { setSuccess } from '../../Redux/Reducers/DoctorSignUpSlice';
function DoctorLogin({ navigation }) {
  const dispatch = useDispatch();
  const globalState = useSelector(state => state);
  const { isLoading, userInfo } = globalState.LoginReducer
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [secured_pass, set_secured_pass] = useState(true);
  /*useEffect(()=>{
    dispatch(setSuccess(false))
  },[])*/
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = data => {
    //console.log(JSON.stringify(data) + "before" + toggleCheckBox);
    const sendData = {
      email: data.email,
      password: data.password,
      //rememberMe: toggleCheckbox
      type: 1
    }
    dispatch(loginUser(sendData)).unwrap().then(()=>{
      if (userInfo !== null) {
        reset()
        setToggleCheckBox(toggleCheckBox => {return false;})

      }
    }).catch((err) => {console.log(err.message) });
    
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        <StatusBar backgroundColor={COLORS.blue} />
        <HeaderNavigation
          backgroundColor={COLORS.blue}
          padding={PADDINGS.mdPadding}
          onPress={() => {
            reset();
            setToggleCheckBox(toggleCheckBox => {
              return false;
            });
            navigation.navigate("DoctorSignup");
          }}
        />
        <View style={styles.container}>
          <View style={styles.topViewStyle}>
            <View style={styles.viewHeaderStyle}>
              <View style={styles.viewforheaderstyle}>
                <Text style={styles.firstTextHeaderStyle}>اهلا بعودتك !</Text>
              </View>
              <View>
                <Text style={styles.secondTextHeaderStyle}>
                  تسجيل الدخول لحسابك
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.viewAfterHeaderStyle}>
            <View>
              <View style={styles.eachTextinputAndErrorTextContainer}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Reusabletextinput
                      placeholder="عنوان البريد الالكتروني"
                      keyboardType="email-address"
                      bordercolor={errors.email ? COLORS.red : COLORS.gray}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                  name="email"
                />
                <Text style={styles.textErrorColor}>
                  {errors.email?.type === 'required'
                    ? 'يجب ادخال عنوان البريد الالكتروني'
                    : errors.email?.type === 'pattern'
                      ? 'يجب ادخال عنوان بريد الكتروني صحيح'
                      : ''}
                </Text>
              </View>
              <View style={styles.eachTextinputAndErrorTextContainer}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern:
                      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
                    maxLength: 20,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Reusabletextinput
                      placeholder="كلمه المرور"
                      bordercolor={errors.password ? COLORS.red : COLORS.gray}
                      right={
                        <TextInput.Icon
                          icon={secured_pass ? 'eye-off' : 'eye'}
                          style={styles.iconStyle}
                          iconColor={COLORS.darkGray}
                          onPress={() =>
                            set_secured_pass(secured_pass => {
                              return !secured_pass;
                            })
                          }
                        />
                      }
                      secureTextEntry={secured_pass}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                  name="password"
                />
                <Text style={styles.textErrorColor}>
                  {errors.password?.type === 'required'
                    ? 'يجب ادخال كلمة المرور'
                    : errors.password?.type === 'pattern'
                      ? 'كلمه المرور يجب لا تقل عن 8 ارقام وحرف كبير وحرف صغير وعلامه مميزه'
                      : errors.password?.type === 'maxLength'
                        ? 'كلمة المرور يجب ان لا تزيد عن 20 حرف ورقم'
                        : ''}
                </Text>
              </View>
              <View style={styles.viewForfirstTextAfterTextinputs}>
                <View style={styles.viewforcheckboxandwordstyle}>
                  <View>
                    <CheckBox
                      onPress={() =>
                        setToggleCheckBox(toggleCheckBox => {
                          return !toggleCheckBox;
                        })
                      }
                      checked={toggleCheckBox}
                      checkedColor={COLORS.blue}
                      uncheckedColor={COLORS.gray}
                      containerStyle={{ marginLeft: RFValue(-10) }}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.textAfterTextinputsStyle,
                        { marginLeft: RFValue(-10) },
                      ]}>
                      تذكرني
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    reset();
                    setToggleCheckBox(toggleCheckBox => {
                      return false;
                    });
                    navigation.navigate('DoctorForgetPassword');
                  }}>
                  <Text style={styles.bluetextstyle}>نسيت كلمه المرور؟</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewfortwolinesandwordstyle}>
                <View style={styles.lineviewstyle}></View>
                <View>
                  <Text style={styles.orWordStyle}>OR</Text>
                </View>
                <View style={styles.lineviewstyle}></View>
              </View>
              <View style={styles.viewfortwoboxesstyle}>
                <LoginWithG />
              </View>
            </View>
            <View>
              <GeneralButton
                title="متابعة"
                // onPress={()=>alert(toggleCheckBox)}
                onPress={handleSubmit(onSubmit)}
                style={styles.buttonMargin}
                isLoading={isLoading}

              />
              <View style={styles.viewForLastTextStyle}>
                <View>
                  <Text style={{ color: COLORS.darkGray3 }}>ليس لديك حساب ؟</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    reset();
                    setToggleCheckBox(toggleCheckBox => {
                      return false;
                    });
                    navigation.navigate('DoctorSignup');
                  }}>
                  <Text style={styles.bluetextstyle}> انشاء حساب </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
export default DoctorLogin;
