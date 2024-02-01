
//Эти интерфейсы используются для заполнения данными хранилищ.
//Предполагаемый источник localStorage

interface toJSON {
    /**
     * преобразование объекта в JSON строку
     */
    toJSON():string;
}

interface fromJSON {
    /**
     * @description заполнения store дынными полученными из хранилища
     * @param str
     */
    fromJSON(str:string):void;
}
export interface objectToJSON extends toJSON, fromJSON{}