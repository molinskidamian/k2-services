const movies = [
    {
        title: "Harry Potter",
        startTime: "2021-05-16 17:30:00",
        endTime: "2021-05-16 20:00:00",
        description: "Sapiente quod et enim est."
    },
    {
        title: "Batman Forever",
        startTime: "2051-12-16 17:30:00",
        endTime: "2051-12-16 20:00:00",
        description: "Minus nostrum nemo id placeat architecto nesciunt dolor."
    },
    {
        title: "Awesome Steel Gloves",
        startTime: "2021-06-16 17:00:00",
        endTime: "2021-06-16 18:30:00",
        description: "Quam vero voluptates reiciendis et. Sed rerum totam facere nisi."
    },
];

function sortAsc(a, b){
  if(a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

movies.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));


const generateCard = () => {
        //   const card = `<div class="card" style="width: 18rem;">
        //   <img src="http://placeimg.com/640/480/transport" class="card-img-top" alt="...">
        //   <div class="card-body">
        //     <h5 class="card-title">Card title</h5>
        //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     <a href="#" class="btn btn-primary">Go somewhere</a>
        //   </div>
        // </div>`;

        movies.forEach(el => {

        })
}