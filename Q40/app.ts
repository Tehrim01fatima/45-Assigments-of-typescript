
function make_album (artist_name:string,album_title:string,tracks?:number) {
    let album : { artist: String , title : String, tracks?:Number }={
    artist:artist_name,
    title:album_title,
}
if  (tracks!== undefined){
    album.tracks=tracks;
}

return album;}

// calling three functions and creating 3 variables with different values
let album1 = make_album("Queen", "Queen titile 1");
let album2 = make_album("zufra", "Zufra title 2");
let album3 = make_album("sammad", "sammad title 3", 23);//function with track parameter
//printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);

