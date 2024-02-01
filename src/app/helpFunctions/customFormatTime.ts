/**
 * @description предоставляет дату в формате "Mon 29 Jan 2024"
 * @param {Date}  date
 * @param {string} locales format 'en-US'
 */
export default function customFormatTime(date:Date,locales:string):string{

    return date.toLocaleDateString('en-US', {
        day:"numeric",
        weekday: 'short',
        year: 'numeric',
        month:'short',
    }).split(',').map(value => {
        if(!value.includes(' ')){
            return value
        }
        return value.split(' ').reverse().join(' ')
    }).join(' ')

}