<template>
  <div class="userInfo-wall">
    <x-header slot="header"
              style="width:100%;position:absolute;left:0;top:0;z-index:100;"
              v-show="true"
              :left-options="{showBack: true, backText: '', preventGoBack: true}"
              :right-options="{showMore: false}"
              title="资料修改"
              @on-click-back="$router.go(-1)"
    ><span slot="right" class="rightMenu"><button ref="addBtn" @click="editUserInfo">保存</button></span></x-header>
    <div class="registerStep2">
      <ul>
        <li class="userAvatar">
          <label class="registerLabel" for="nickName">修改头像</label>
          <div class="registerLabelFor">
            <div class="userAvatar-box userAvatar-right">
              <img :src="avatar" alt="" ref="avatar">
              <input type="file" class="userAvatar-file" ref="userAvatar" accept="image/jpeg,image/png,image/gif" @change="editAvatar()"/>
            </div>
          </div>
        </li>
        <li>
          <label class="registerLabel" for="nickName">昵称</label>
          <div class="registerLabelFor">
            <input type="text" id="nickName" ref="nickName" placeholder="请输入6-12位昵称" v-model="nickName">
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
        <li class="no-border-bottom">
          <label class="registerLabel" for="city">地区</label>
          <div class="registerLabelFor">
            <x-address placeholder="请选择地区" title="" id="city" v-model="city" raw-value :list="addressData" hide-district></x-address>
            <!--<selector :options="cityList" id="city" ref="city"  placeholder="请选择地区" v-model="city"></selector>-->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import publicFn from '../publicFn'
import addressData from '../data/address.json'
import { XHeader, Selector, XAddress, Value2nameFilter as value2name } from 'vux'
export default {
    name: 'userInfo',
    components: {
        XHeader,
        Selector,
        XAddress
    },
    data () {
        return {
            avatar: '',
            nickName: '',
            isUser: publicFn.isUser(),
            userInfo: {},
            gender: 'M',
            addressData: addressData,
            city: [],
            constellation: '',
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
            ]
        }
    },
    created () {
        if (this.isUser) {
            this.getUserInfo(publicFn.isUser())
        } else {
            this.$router.push({name: 'mine'})
        }
    },
    methods: {
        getUserInfo (uid) {
            this.$http.get('/app/user/' + uid).then(function (data) {
                if (data) {
                    this.userInfo = data.body.data
                    if (data.body.data.avatar) this.avatar = data.body.data.avatar
                    if (data.body.data.nickName) this.nickName = data.body.data.nickName
                    if (data.body.data.gender) this.gender = data.body.data.gender
                    if (data.body.data.constellation) this.constellation = data.body.data.constellation
                    if (data.body.data.city) this.city = [data.body.data.city]
                }
            }, function (response) {
                return null
            })
        },
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
        editUserInfo () {
            var zipFormData = new FormData()
            zipFormData.append('uid', this.isUser)
            zipFormData.append('nickName', this.nickName)
            zipFormData.append('gender', this.gender)
            zipFormData.append('constellation', this.constellation)
            zipFormData.append('city', this.getName(this.city))
            zipFormData.append('avatarFile', this.$refs.userAvatar.files[0])
            this.$http.post('/app/user/updateinfos', zipFormData).then(function (data) {
                if (data.body.status) {
                    this.$vux.alert.show({
                        title: '',
                        content: '资料修改成功',
                        buttonText: '关闭'
                    })
                    this.$router.push({name: 'mine'})
                } else {
                    this.$vux.alert.show({
                        title: '',
                        content: data.body.msg,
                        buttonText: '关闭'
                    })
                }
            }, function (response) {
                console.info(response)
            })
        },
        editAvatar (e) {
            if (this.$refs.userAvatar.files) {
                if (typeof FileReader === 'undefined') {
                    alert('您的浏览器不支持图片上传，请升级您的浏览器')
                    return false
                }
                var reader = new FileReader()
                reader.readAsDataURL(this.$refs.userAvatar.files[0])
                var _self = this
                reader.onload = function (ee) {
                    _self.$refs.avatar.src = this.result
                }
            }
        }
    }
}
</script>

