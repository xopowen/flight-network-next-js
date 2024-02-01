import {BookTickets} from "../stateManagers/BookTickets";


export const RootStore = {
    'bookTickets':new BookTickets(),
};

if(typeof window !== "undefined"){
    window.addEventListener('load',()=>{
        for (const argument of Object.entries(RootStore)) {
            let savedInfo = localStorage.getItem(argument[0])
            if(savedInfo){
                argument[1].fromJSON(savedInfo)
                localStorage.removeItem(argument[0])
            }

        }
    })

    /**
     * @description так как сайт имитация мы сохраняем данные Stores
     * в хранилище перед перезагрузкой в формате json
     */
    window.addEventListener('beforeunload',()=>{
        for (const argument of Object.entries(RootStore)) {
            localStorage.setItem(argument[0],argument[1].toJSON())
        }
    })
}