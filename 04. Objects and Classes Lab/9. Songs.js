function songs (array){

    let songs = [];

    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    const numberOfSongs = array[0];
    const printTypeList = array[array.length-1]    
    
    for (let song = 1; song <= numberOfSongs; song++) {
        let songInfo = array[song].split("_");
        const [typeList, name, time] = songInfo;
        const newSong = new Song (typeList, name, time);
        songs.push(newSong);        
    }

    if (printTypeList === "all"){
        songs.forEach(song => {
            console.log(`${song.name}`);
        })
    } else {
        for (const song of songs) {
            if (song.typeList === printTypeList){
                console.log(`${song.name}`);
            }
        }
    }

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )


songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])