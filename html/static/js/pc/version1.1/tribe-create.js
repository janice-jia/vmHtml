/**
 * Created by Daniel on 8/3/16.
 */

$(function(){

    /**
     * Step one
     * ===================================
     */

    var initState = {
        isBTN:true
    };

    // 默认显示第一个tab
    $('#myTabs a[href="#first"]').tab('show');
    // $('#myTabs a[href="#third"]').tab('show');

    /**
     * 点击上传图标按钮 or 点击图标
     */
    $('.upload-icon').on('click','.upload-icon-btn,.upload-icon-preview',function(e){

        if($(e.target).hasClass("upload-icon-btn")){
            initState.isBTN = true;
        }else{
            // 这里可以添加判断用户是否修改了新图标,但没上传!
        }
        $('#tribe-upload-icon').click();
    });


    /**
     * 预览文件
     */
    function previewFile() {

        var file = this.files[0];

        if(file == undefined) return false;

        if(!/image\/\w+/.test(file.type)){
            alert("文件必须为图片！");
            return false;
        }

        var reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function(e){

            $('.upload-icon-preview').css({
                // 'border':'1px solid red',
                'width':'50px',
                'height':'50px',
                'background':'url('+ this.result +') no-repeat',
                'background-size':'cover',
                'background-clip':'border-box',

            });

            $('.upload-icon-btn').hide();
        }

    }

    /**
     * 为inputFile添加onchange事件
     */
    $('#tribe-upload-icon')[0].addEventListener('change',previewFile,false);


    /**
     * First ajax
     *
     *  如需修改ajax提交的url地址,直接在下面添加url属性即可。
     *
     *  POST Data 解释
     *  [edit-tribe-name] => 部落名称(String)
     *  [edit-tribe-type] => 部落类型(int) 数字表示 1 2 3
     *  [edit-tribe-desc] => 部落描述(String)
     *  [edit-tribe-icon] => 部落图标(File类型)
     */
    $('#tribe-create-frist').ajaxForm({
        // url:"http://www.baidu.com/",  //自定义AJAX 提交地址
        beforeSubmit: function (arr, $form, options) {
            return checkParams.first(arr);
        },
        success: function(res){
            // 第一步创建部落成功以后,服务端需要返回部落id,第二步依赖部落id继续操作;
            console.info('success',res);

            // 显示第二个tab
            $('#myTabs a[href="#second"]').tab('show');
        },
        error: function(err){
            // 保存失败
            console.info('error',err);
        }
    });

    /**
     * 表单验证
     *
     */
    var checkParams = {
        first: function (feilds) {

            if(!feilds[0].value.length|| feilds[0].value.length > 20){
                console.log('部落名称为空,或者超过20字符');
                return false;
            }

            if(!feilds[2].value.length|| feilds[2].value.length > 140){
                console.log('部落简介不能超过140个字符');
                return false;
            }

            if(!feilds[3].value){
                // 这里判断需要再加个条件来判断是否是编辑
                alert('请选择图标');
                return false;
            }

            return true;
        },
        second: function (feilds) {

            if(!feilds[0].value.length|| feilds[0].value.length > 20){
                var msg = (!feilds[0].value.length) ? '请输入运营者姓名' : '姓名不能超过20个字符';
                alert(msg);
                return false;
            }

            var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
            if(!re.test(feilds[1].value)){
                alert('请输入有效的邮箱地址！');
                return false;
            }

            if(!/^1\d{10}$/.test(feilds[2].value))
            {
                alert('请输入有效的手机号码！');
                return false;
            }


            return true;
        }
    }

    /**
     * Step two
     * ===================================
     */

    // 后退
    $('.tribe-second-back').click(function(){
        $('#myTabs a[href="#first"]').tab('show');
    });


    $('#tribe-create-second').ajaxForm({
        url:'http://127.0.0.1/2.php',
        beforeSubmit: function (arr, $form, options) {
            return checkParams.second(arr);
        },
        success: function(res){
            console.info('second-success',res);


            // 显示第3个tab
            $('#myTabs a[href="#third"]').tab('show');
        },
        error: function(err){
            // 保存失败
            console.info('second-error',err);
        }
    });



});
