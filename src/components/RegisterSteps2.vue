<template>
  <div class="registerStep2">
    <form action="" @submit.prevent="registerSubmitStep2">
      <ul>
        <li>
          <label class="registerLabel" for="nickName">昵称</label>
          <div class="registerLabelFor">
            <input type="text" id="nickName" ref="nickName" placeholder="请输入6-12位昵称">
          </div>
        </li>
        <li>
          <label class="registerLabel" for="gender">性别</label>
          <div class="registerLabelFor">
            <div class="sexBox" id="gender">
              <span class="M" @click="changeGender">
                <img src="../assets/M.png" alt="" v-show="gender==='M'">
                <img src="../assets/M_noSelect.png" alt="" v-show="gender==='F'">
              </span>
                <span class="F" @click="changeGender">
                <img src="../assets/F.png" alt="" v-show="gender==='F'">
                <img src="../assets/F_noSelect.png" alt="" v-show="gender==='M'">
              </span>
            </div>
          </div>
        </li>
        <li>
          <label class="registerLabel" for="constellation">星座</label>
          <div class="registerLabelFor">
            <selector :options="constellationList" id="constellation" ref="constellation"  placeholder="请选择星座" v-model="constellation"></selector>
          </div>
        </li>
        <li>
          <label class="registerLabel" for="city">地区</label>
          <div class="registerLabelFor">
            <x-address placeholder="请选择地区" title="" id="city" v-model="city" raw-value :list="addressData" hide-district></x-address>
            <!--<selector :options="cityList" id="city" ref="city"  placeholder="请选择地区" v-model="city"></selector>-->
          </div>
        </li>
      </ul>
      <button type="submit">完成</button>
    </form>
  </div>
</template>

<script>
import addressData from '../data/address.json'
import { Selector, Group, cookie, XAddress, Value2nameFilter as value2name } from 'vux'
export default {
    name: 'registerSteps2',
    components: {
        Selector,
        Group,
        XAddress
    },
    data () {
        return {
            info: '',
            gender: 'M',
            constellation: '',
            city: [],
            addressData: addressData,
            constellationList: [
                {key: '水瓶座', value: '水瓶座'},
                {key: '双鱼座', value: '双鱼座'},
                {key: '白羊座', value: '白羊座'},
                {key: '金牛座', value: '金牛座'},
                {key: '双子座', value: '双子座'},
                {key: '巨蟹座', value: '巨蟹座'},
                {key: '狮子座', value: '狮子座'},
                {key: '处女座', value: '处女座'},
                {key: '天秤座', value: '天秤座'},
                {key: '天蝎座', value: '天蝎座'},
                {key: '射手座', value: '射手座'},
                {key: '摩羯座', value: '摩羯座'}
            ],
            cityList: [
                {key: '北京', value: '北京'},
                {key: '天津', value: '天津'}
            ],
            registerStep1Data: {},
            userData: {}
        }
    },
    created () {
        if (cookie.get('registerStep1Data')) {
            this.registerStep1Data = JSON.parse(cookie.get('registerStep1Data'))
        } else {
            this.$router.push({name: 'registerSteps1'})
        }
    },
    watch: {
        userData: function () {
            console.info('this.userData', this.userData)
            cookie.remove('uid', {
                path: '/'
            })
            cookie.remove('registerStep1Data')
            this.$router.push({path: '/mine'})
        }
    },
    methods: {
        changeGender () {
            if (this.gender === 'F') {
                this.gender = 'M'
            } else {
                this.gender = 'F'
            }
        },
        getName (value) {
            var city = value2name(value, addressData)
            city = city ? city.split(' ') : []
            return city ? city[1] : ''
        },

        registerSubmitStep2 () {
            if (!this.$refs.nickName.value) {
                this.$vux.alert.show({
                    title: '',
                    content: '请输入6-12位昵称',
                    buttonText: '关闭'
                })
                return false
            } else {
                 //  注册
                this.$http.post('/app/user/register', {
                    mobile: this.registerStep1Data.mobile,
                    password: this.registerStep1Data.password,
                    code: this.registerStep1Data.code,
                    nickName: this.$refs.nickName.value,
                    gender: this.gender,
                    constellation: this.constellation,
                    city: this.getName(this.city)
                }).then(function (data) {
                    console.info('data', data)
                    console.info('data', data.body)
                    if (data.body.status) {
                        this.userData = data.body.data
                        console.info('this.userData', this.userData)
                    } else {
                        this.userData = null
                    }
                }, function (response) {
                    console.info(response)
                })
            }
        }
    }
}
</script>
