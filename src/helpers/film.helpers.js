export function filterFilmsByDirector(list, director) {
if (director == "") {return list;
} else {
return list.filter((film) => film.director == director);
}
}

export function getListOf(list, prop) {
    return list.reduce((uniqueValue, item) => {

        if (uniqueValue.indexOf(item[prop]) == -1) {
            uniqueValue.push(item[prop]);
        }
        return uniqueValue;
    }, []);
}

export function getFilmStats(list) {

    return list.map(ele => ({avg_score: ele.rt_score, acc_score: ele.rt_score, latest: ele.release_date}))
    
}
