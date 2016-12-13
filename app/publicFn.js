import $ from 'jquery'

module.exports = {

    //返回用户登录状态
    isUser() {
        return !!localStorage.uid
    },

    //返回用户id
    getUser() {
        return localStorage.uid
    },

    //当前用户信息
    getUserInfo(data){
        console.info('data',data);
        $.ajax({
                type: 'Get',
                url: '/app/user/'+data.uid+'/infos',
                data:{password:data.password},
                success:function(data){
                    console.info('data11111111',data);
                    return data;
                }
            })
    }
}

