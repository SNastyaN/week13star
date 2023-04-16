let date = new Date(new Date - 30 * 1000);
let diff = new Date - date;

diff = diff/1000;
function formatDate{
    if (diff <= 30){
        console.log("прямо сейчас");
    if else (diff >= 31 && <= 300){
        console.log("30 сек. назад");
    }
    if else(diff >= 301 && <= 345600 )
} else console.log('вчерашняя дата');

}

// "прямо сейчас"

//console.log(formatDate(new Date(new Date - 30 * 1000))); 
// "30 сек. назад"

//console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); 
// "5 мин. назад"

// вчерашняя дата вроде 31.11.2022, 20:00
//console.log(formatDate(new Date(new Date - 86400 * 4 * 1000)));
//formatDate(date)