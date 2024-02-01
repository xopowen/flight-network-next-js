/**
 * @description запускает событие requestSubmit формы прикрепленного поля
 * при нажатии клавиш ctrl+enter
 * @param {React.KeyboardEvent<HTMLInputElement>} e
 */
export const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === 'Enter' || e.key === 'NumpadEnter')
    ) {

        e.preventDefault()
        e.currentTarget.form?.requestSubmit()
    }
}
