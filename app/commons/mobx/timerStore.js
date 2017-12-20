/**
 * Created by glzc on 2017/9/30.
 */
import {observable,autorun} from 'mobx';
import TimerModel from './timerModel';

export const NUM_TIMERS = 10;

export default class TimerStore{
    @observable timers = [];
    @observable users = {name: 'pc',age: 27};

    constructor(){
        for(let i=0;i<NUM_TIMERS;i++){
            this.timers.push(new TimerModel());
        }
        this.consoleLog();
        setTimeout(() => {
            this.reset();
        },1000);
    }
    reset = () => {
        this.users.name = 'ph';
        this.users.age = 25;     //未改变this.users的指针地址，console只执行一次，等于Object.assign(this.users,{});
        //this.users = Object.assign({},this.users,{name: 'ph',age: 25});   //返回的是{}的指针地址，所以this.users指针已变，触发了autorun，所以console执行两遍
    };
    consoleLog = () => {
        autorun(() => {
            console.log('123pc',this.users);
        })
    }
}