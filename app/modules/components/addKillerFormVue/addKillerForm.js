import './addKillerForm.less';

//import {KillersService} from 'Services/killersService';
let killersService = angular.injector(['services']).get("killersService");

const AddKillerForm = {
    template: require('./addKillerForm.html'),
    data() {
        return {
            killerName: ''
        };
    },
	methods: {
        sendMessage(event) {
            killersService.addKiller(this.killerName);
            this.killerName = '';
        }
	}
};

export default AddKillerForm;