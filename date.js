module.exports = {getDate: getDate, getDay: getDay};

function getDate(){ 
    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    }
    let today = new Date ();
    let day = today.toLocaleDateString("en-US",options);
    return day
}

function getDay(){ 
    let options = {
        weekday: "long",
    }
    let today = new Date ();
    return today.toLocaleDateString("en-US",options);
}
