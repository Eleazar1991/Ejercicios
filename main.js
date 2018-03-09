$.get('https://jsonplaceholder.typicode.com/photos').then(photosLoad).catch(catchError);

function photosLoad(photos){
    for(var i=0;i<100;i++) {
        var html=`<div class="card" style="width: 18rem;"><img class="card-img-top" src="
        ${photos[i].url}" alt="Card image cap"> <div class="card-body"><h5 class="card-title">
        ${photos[i].title}</h5> </div> <div class="card-body"> <a href="
        ${photos[i].thumbnailUrl}" class="card-link">Thumbnail</a></div></div>`;
        $(".appendresults").append(html);
    }
}
function catchError(error){
    console.log(error);
}