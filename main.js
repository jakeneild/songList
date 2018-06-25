$(document).ready(function() {
    let $loadSongs = $("#load-songs")
    // Use jQuery to get a reference to `load-songs`
    let $songList = $("#song-list")
    // Use jQuery to get a reference to `song-list`
    $loadSongs.on("click", function(){
        $.ajax("./songs.json")
        .then(json => {
            console.log(json.songs)
            $songList.append($("<p>Testing</p>"))
           for(let i = 0; i < json.songs.length; i++){
               console.log(json.songs[i])
               $songList.append(
                   $("<section></section>").addClass("song").append(
                       $("<h1></h1>").addClass("song_title").text(`${json.songs[i].title}`), 
                       $("<section></section>").addClass("song_description").text(`Preformed by ${json.songs[i].artist} off the album ${json.songs[i].album}.`)
                    )
                )
           }
            
        })
    })

    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */


    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
})


/*{
  "songs": [
    {
      "title": "The Walk",
      "artist": "Mayer Hawthorne",
      "album": "How Do You Do"
    },
    {
      "title": "YYZ",
      "artist": "Rush",
      "album": "Moving Pictures"
    },
    {
      "title": "Medicine",
      "artist": "Grace Potter",
      "album": "Grace Potter and the Nocturnals"
    },
    {
      "title": "Legs",
      "artist": "ZZ Top",
      "album": "Eliminator"
    }
  ]
}*/