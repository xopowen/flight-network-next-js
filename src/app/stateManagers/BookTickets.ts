import {makeAutoObservable, runInAction, toJS} from "mobx";
import {objectToJSON} from "@/app/stateManagers/interfacesStores";
import {z} from 'zod';
export type FlightInfo = {
    id: number,
    departure: Date,
    price: number,
    timeUp: Date  ,
    timeDown: Date ,
    toCity: string,
    fromCity: string
}

export const schemeForFlightInfo = z.object({
    id: z.coerce.number(),
    departure: z.coerce.date(),
    price: z.coerce.number(),
    timeUp: z.coerce.date()  ,
    timeDown: z.coerce.date() ,
    toCity: z.coerce.string(),
    fromCity: z.coerce.string()
})

export enum Steps {
    'one' = 1,
    'two' = 2,
    'tree' = 3,
}


type PassengerInfo = {
    order: number,
    type: 'adult' | 'children'
    appeal: 'mr' | 'ms',
    'first-name': string,
    'sur-name': string
}
export const schemePassengerInfo = z.object({
    order: z.number(),
    type: z.enum([ 'adult' ,'children']),
    appeal: z.enum([  'mr' , 'ms']),
    'first-name': z.string(),
    'sur-name': z.string()
})

export type ServiceType = {
    uid:number,
    title:string,
    price?:number,
    count:number
}
export type LevelServiceType = ServiceType & {
    type:'standard'|'platinum',
    signature:string,
}
/**
 * @description информация пассажиров
 */
interface PassengersInfo {


      addPassengerInfo(passenger: PassengerInfo): void;

      _includesPassenger(order: number): boolean;

      changePassengerInfo(order: number, passenger: PassengerInfo): void;
}

export class BookTickets implements PassengersInfo, objectToJSON {

    constructor() {
        makeAutoObservable(this)
    }

    _flightInfo: FlightInfo | undefined = undefined;
    private _registrationStage: Steps = Steps.one
    private _contactInfo: Array<Array<any>> = [];
    private _listPassengers: Array<PassengerInfo> = [];
    private _ticketsService  = {}



    get listPassengers(): Array<PassengerInfo> {
        return this._listPassengers;
    }
    get contactInfo(): Array<Array<any>> {
        return this._contactInfo;
    }
    set contactInfo(value: Array<Array<any>>) {
        runInAction(()=>{
            this._contactInfo = value;
        })
    }
    getContactInfo(field: string): string | undefined {
        let ret = this._contactInfo.find(value =>value[0] === field)
        if (ret) {
            return ret[1]
        }
    }

    get registrationStage(): Steps {
        return this._registrationStage;
    }

    set registrationStage(value: Steps) {
        runInAction(()=>{
            this._registrationStage = value;
        })
    }

    get flightInfo(): FlightInfo | undefined {

        return this._flightInfo;
    }

    set flightInfo(value: FlightInfo ) {

        if ( value.id !== this._flightInfo?.id) {

            runInAction(() => {
                this._flightInfo = value;
            })
        }

    }
    isFlightInfo(value: FlightInfo) {
        return this._flightInfo?.id === value.id
    }

    get ticketServiceList():any{
        return this._ticketsService;
    }

    getService(uid:number){
        // @ts-ignore:Type error.
        if(this.isInfService(uid)){
            // @ts-ignore:Type error.
            return this._ticketsService[uid];
        }
        return
    }
    addService(service:ServiceType|LevelServiceType):void {
        if(!this.isInfService(service.uid)){
            runInAction(() => {
                // @ts-ignore:Type error.
                this._ticketsService[service.uid]=service
            })
        }
    }

    delService(uid:number) :void{
        runInAction(() => {
            // @ts-ignore:Type error.
           delete this._ticketsService[uid]
        })
    }

    isInfService(uid: number) {
        if(this._ticketsService){
            return uid in  toJS(this._ticketsService)
        }
       return false
    }


    getPassengerInfo(order:number):PassengerInfo|undefined{
        if(this._includesPassenger(order)){
            return this._listPassengers.find(value => value.order === order)
        }
    }
    /**
     * @description проверка есть ли элемент в массиве
     * @param order
     */
    _includesPassenger(order: number): boolean {
        return this._listPassengers.findIndex(value => value.order === order) !== -1
    }

    /**
     * @description добавляем информацию о пассажире
     * @param {PassengersInfo} passenger
     */
    addPassengerInfo(passenger: PassengerInfo): void {
        if (!this._includesPassenger(passenger.order)) {
            runInAction(() => {
                this._listPassengers.push(passenger)
            })
        } else {
            this.changePassengerInfo(passenger.order, passenger)
        }
    }

    /**
     *
     * @param {number} order
     * @param {PassengersInfo} passenger
     */
    changePassengerInfo(order: number, passenger: PassengerInfo): void {
        let info = toJS(this._listPassengers.find(value => value.order === order))
        if (info) {
            info = passenger
        }
    }

    fromJSON(str: string): void {
        runInAction(()=>{
            let jsArray: [string, [string, any]][] = Object.entries(JSON.parse(str))
            for (const strElement of jsArray) {
                if(strElement[0]==='_flightInfo'){
                    this[strElement[0]] =schemeForFlightInfo.parse(strElement[1])
                    continue;
                }
                // @ts-ignore:Type error.
                this[strElement[0]] = strElement[1]
            }
        })
    }

    toJSON(): string {
        return JSON.stringify(toJS(this));
    }
}
