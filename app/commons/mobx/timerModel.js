/**
 * Created by glzc on 2017/9/30.
 */
import {observable,action,computed} from 'mobx';
import {now} from 'mobx-utils';
import moment from 'moment';

const TICK_INTERVAL = 75;

export default class TimerModel{
    @observable startTime = null;
    @observable textValue = 'Hello World';

    get isRunning(){
        return this.startTime != null;
    };
    @action start(){
        this.startTime = now(TICK_INTERVAL);
    };
    @action stop(){
        this.startTime = null;
    };
    @computed get elapsedTime(){
        if(this.isRunning){
            return now(TICK_INTERVAL) - this.startTime;
        }else{
            return 0;
        }
    };
    @computed get label(){
        return moment(this.elapsedTime)
            .format('h:mm:ss');
    };
    @action getInputText(v){
        this.textValue = v;
    };
};