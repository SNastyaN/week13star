//функция для формирования даты/времени в строку
function formatDate(date){
    let diff = (new Date - date)/1000;//разница между текущей датой и переданной датой в секундах
    if (diff < 1 ){
        return"прямо сейчас";
    } //если разница меньше 1 секунды, то возвращаем "прямо сейчас"
    else if (diff > 60){
        return `${Math.floor(diff)} сек. назад`; // если разница меньше 1 минуты, то возвращаем количество секунд, прошедших с момента переданной даты
    }
    else if (diff < 3600) {
        return `${Math.floor(diff)/60} мин. назад`; // если разница меньше 1 часа, то возвращаем количество минут, прошедших с момента переданной даты
    }
else {
    let day = date.getDate().toString().padStart(2,"0");
    let month = (date.getMonth() + 1).toString().padStart(2,"0");
    let year = date.getFullYear().toString().slice(-2);
    let hours = date.getHours().toString().padStart(2,"0");
    let minutes = date.getMinutes().toString().padStart(2,"0");
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}}

//console.log(formatDate(new Date(new Date - 30 * 1000))); 
// "30 сек. назад"

//console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); 
// "5 мин. назад"

// вчерашняя дата вроде 31.11.2022, 20:00
//console.log(formatDate(new Date(new Date - 86400 * 4 * 1000)));
//formatDate(date)