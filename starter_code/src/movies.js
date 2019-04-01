/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
  let newArr = arr.map(a => Object.assign({}, a));
  for(let i = 0; i < newArr.length; i += 1){
    if(typeof(newArr[i].duration) !== Number){
      if(newArr[i].duration.indexOf(' ') !== -1 && newArr[i].duration.indexOf('m') !== -1){
        let hoursMinutes = newArr[i].duration.split(' ');      
        let hours = (parseInt(hoursMinutes[0].split(''))) * 60;
        let minutes = parseInt(hoursMinutes[1].split('m'));
        newArr[i].duration = hours + minutes;
      }else if(newArr[i].duration.indexOf('h') !== -1){
        let hoursMinutes = newArr[i].duration.split(' ');
        let hours = (parseInt(hoursMinutes[0].split(''))) * 60;
        newArr[i].duration = hours;
        
      }else if(newArr[i].duration.indexOf('m') !== -1){
        let hoursMinutes = newArr[i].duration.split(' ');
        let minutes = (parseInt(hoursMinutes));
        newArr[i].duration = minutes;
      }
    }else{
        continue;
      }
  }
return (newArr);  
};
//funtion to do average
function average(arr){
  let suma = 0;
  arr.forEach(e => {
   suma += e;
 })
 let avgRate = suma/arr.length;
 if(avgRate % 1 ===0){
  return (parseFloat(avgRate));
  }else{
  return parseFloat(avgRate.toFixed(2));
  }
}

// Get the average Rate

function ratesAverage (arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i += 1){
    if(typeof(arr[i]['rate']) !== String){
      newArr.push(parseFloat(arr[i]['rate']));
    }else{
      newArr.push(parseFloat(arr[i]['rate']));
    }
  }
  return average(newArr); 
}

// Get the average of Drama Movies

function dramaMoviesRate(arr){
  let newArr = []
  arr.forEach(e => {
    if(e.genre.indexOf('Drama') !== -1){
      newArr.push(e.rate);
    }
  });
  if(newArr.length === 0){
    return undefined;
  }
  return average(newArr); 
}

// Order by time duration, in growing order
function orderByDuration(arr){
  let newArr2 = arr.map(a => Object.assign({}, a));
  // newArr2 = turnHoursToMinutes(arr);  
  newArr2.sort(function(a,b) {
    if(a.duration < b.duration){
      return -1;
    }
    if(a.duration > b.duration){
      return 1;
    }else{
      if(a.title > b.title){
        return 1;
      }
      if(a.title < b.title){
        return -1;
      }
      return 0;
    }
    
  });
  return newArr2;
};  

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){
  if(arr[0] === undefined){
    return undefined
  }
  let newArr = [];
  arr.forEach(e => {
    if(e.genre.indexOf('Drama') !== -1 && e.director ==='Steven Spielberg'){
      newArr.push(e);
    }
  });
  if(newArr.length === 0){
    return `Steven Spielberg directed ${newArr.length} drama movies!`
  }else {
    return `Steven Spielberg directed ${newArr.length} drama movies!`
  }
  
}
// Order by title and print the first 20 titles
function orderAlphabetically(arr){
  let newArr = [];
  arr.forEach(e =>{
    newArr.push(e.title);
  })
  newArr.sort();
  if(newArr.length <=20){
    return newArr;
  }else{
    return newArr.slice(0,20);
  }
}

// Best yearly rate average
function bestYearAvg(arr){
  if(arr[0] === undefined){
    return undefined
  }  
  let maxRate = 0;
  let indice;
  
  arr.forEach((e,i) => {    
    if(parseFloat(maxRate) < parseFloat(e.rate)){
      maxRate = parseFloat(e.rate);
      indice = i;
    }  
  })
    return `The best year was ${arr[indice].year} with an average rate of ${arr[indice].rate}`
    
}

