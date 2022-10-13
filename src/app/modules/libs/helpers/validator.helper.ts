import * as moment from "moment";

export default class ValidatorHelper{


    static validateDate(firsDay:string,endDay:string){

        if(firsDay==="" || endDay===''){
            return false
        }
        if(moment().diff(moment(firsDay), 'days')<=0 || moment(endDay).diff(moment(), 'days')>1){
            return null
        }else{
            return true
        }
        
        
        
    }

    static validateOneDay(date:string){
        if(date===""){
            return false
        }
        if(moment().diff(moment(date), 'days')<=0){
            return false
        }else{
            return true
        }
    }
}