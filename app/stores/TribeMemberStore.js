import alt from '../alt'
import TribeMemberActions from '../actions/TribeMemberActions'

class TribeMemberStore{
    constructor() {
        this.bindActions(TribeMemberActions);
        this.tribeMember = {};
        this.tribeMember.creator = {};
        this.tribeMember.members = [];
        this.tribeMember.totalItems = 0;
        this.lastPage = false;
    }

    //部落族员列表--成功
    onGetMemberSuccess(data){
        if(data.status) {
            console.info('onGetTribeInfoSuccess',data);
            //this.tribeMember = data.data;
            //this.tribeMember.totalItems = data.totalItems;
            if(data.currentPage > 1){
                this.tribeMember.members = this.tribeMember.members.concat(data.data.members);
            }else{
                this.tribeMember = data.data;
                this.tribeMember.totalItems = data.totalItems;
            }
            this.lastPage = data.lastPage;
        }else{
            alert(data.msg);
        }
    }
    //部落族员列表--失败
    onGetMemberFail(data){
        //console.info('onGetTribeInfoFail',data);
        this.tribeMember = {};
    }

}

export default alt.createStore(TribeMemberStore, 'TribeMemberStore');
