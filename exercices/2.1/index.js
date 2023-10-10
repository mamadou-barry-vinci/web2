function addDateTime(message="This is the best moment to have a look at this website !"){
    const dateTimeNow = new Date();
    const dateStr = dateTimeNow.toLocaleDateString();
    const heureStr = dateTimeNow.toLocaleTimeString();
    return dateStr + " " + " " + heureStr + " : " + message;
}

alert(addDateTime());
