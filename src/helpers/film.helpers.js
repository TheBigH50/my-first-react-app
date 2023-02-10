export function filterFilmsByDirector(list, director) {
  if (director == "") {
    return list;
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
  //let acc_score = list.reduce((sum, film) => sum + parseInt(film.rt_score), 0);
console.log(list);
  // let total = list.length;

  // let avg_score = acc_score / total;

  //find stats
  let ret = list.reduce(
    (stats, film, idx, arr) => {
      stats.acc_score += parseInt(film.rt_score);

      if (!stats.latest || stats.latest < film.release_date) {
        stats.latest = film.release_date;
      }
console.log(idx, arr.length);
      // If this film is the last film
      if (idx == arr.length - 1) {
        stats.avg_score = stats.acc_score / stats.total;
        console.log("hey this ran");
      }

      return stats;
    },

    {
      acc_score: 0,
      avg_score: null,
      total: list.length,
      latest: null,
    }
  );
  console.log(ret);
  return ret;
}
