function collect_ratings() {
   let ratings = {                  //objekti nimeltä "ratings"
       count: 0,
       sum: 0,
       average: 0
   }

   let rating = 0
 

let elements = document.querySelectorAll(".rating");

    elements.forEach((element) => {

        rating=parseInt (element.id.replace("star", " ")); 
            ratings.count += parseInt(element.value);
            ratings.sum += parseInt(element.value)*rating;
        })

    if (ratings.count!== 0) {

        ratings.average = ratings.sum / ratings.count;

    }

    return ratings;

    }

//eventlistener
document.addEventListener("change", () => {
    const ratings = collect_ratings();

    //muuttaa luvun näyttämään kokonaisluvun kahdella desimaalilla
    document.querySelector("#average").value=ratings.average.toFixed(2);
    
})
