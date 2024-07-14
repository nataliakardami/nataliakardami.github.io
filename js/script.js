const songList = [
    { trackName: "Gimme! Gimme! Gimme! (A Man After Midnight)", artistName: "ABBA", albumName: "Voulez-Vous" },
    { trackName: "Maria", artistName: "Blondie", albumName: "Greatest Hits" },
    { trackName: "Voulez-Vous", artistName: "ABBA", albumName: "Voulez-Vous" },
    { trackName: "Take on Me", artistName: "a-ha", albumName: "Hunting High and Low" },
    { trackName: "Lay All Your Love On Me", artistName: "ABBA", albumName: "Super Trouper" },
    { trackName: "Ma Baker", artistName: "Boney M.", albumName: "Love For Sale" },
    { trackName: "Waterloo", artistName: "ABBA", albumName: "Waterloo" },
    { trackName: "Yes Sir, I Can Boogie", artistName: "Baccara", albumName: "Baccara" },
    { trackName: "Hot Stuff", artistName: "Donna Summer", albumName: "Bad Girls" },
    { trackName: "Hung Up", artistName: "Madonna", albumName: "Confessions on a Dance Floor" },
    { trackName: "Take A Chance On Me", artistName: "ABBA", albumName: "The Album" },
    { trackName: "Tragedy", artistName: "Bee Gees", albumName: "Spirits Having Flown" },
    { trackName: "Does Your Mother Know", artistName: "ABBA", albumName: "Voulez-Vous" },
    { trackName: "Sweet Dreams (Are Made of This) - Remastered", artistName: "Eurythmics, Annie Lennox, Dave Stewart", albumName: "Sweet Dreams (Are Made Of This)" },
    { trackName: "I'm So Excited", artistName: "The Pointer Sisters", albumName: "So Excited! (Expanded Edition)" },
    { trackName: "Venus", artistName: "Bananarama", albumName: "True Confessions (Collector's Edition)" },
    { trackName: "Believe", artistName: "Cher", albumName: "Believe" },
    { trackName: "Don't You Want Me", artistName: "The Human League", albumName: "Dare!" },
    { trackName: "You Should Be Dancing", artistName: "Bee Gees", albumName: "Children Of The World" },
    { trackName: "It's Raining Men", artistName: "The Weather Girls", albumName: "Success" },
    { trackName: "You're The One That I Want - From “Grease”", artistName: "John Travolta, Olivia Newton-John", albumName: "ドライブが楽しくなる洋楽ヒッツ！80年代 HITS" },
    { trackName: "Automatic", artistName: "The Pointer Sisters", albumName: "Break Out (1983 Version - Expanded Edition)" },
    { trackName: "Dancing Is The Best Revenge", artistName: "!!!, Lea Lea", albumName: "Shake The Shudder" },
    { trackName: "Ceci n'est pas un cliché", artistName: "Charlotte Adigéry, Bolis Pupul", albumName: "Topical Dancer" },
    { trackName: "Can't Get You out of My Head", artistName: "Kylie Minogue", albumName: "Fever" },
    { trackName: "Koca Bir Saçmalık", artistName: "Jakuzi", albumName: "Fantezi Müzik" },
    { trackName: "Salt Air", artistName: "Chew Lips", albumName: "Kitsuné: Salt Air - EP" },
    { trackName: "Radio Romance", artistName: "Mashrou' Leila", albumName: "The Beirut School" },
    { trackName: "Serotonin Moonbeams", artistName: "The Blessed Madonna", albumName: "Serotonin Moonbeams" },
    { trackName: "Hung Up", artistName: "Madonna", albumName: "Confessions on a Dance Floor" },
    { trackName: "I'm Outta Love", artistName: "Anastacia", albumName: "Not That Kind" },
    { trackName: "Tienaté", artistName: "Nu Genea", albumName: "Bar Mediterraneo" },
    { trackName: "You're My Heart, You're My Soul", artistName: "Modern Talking", albumName: "The First & Second Album (30th Anniversary Edition)" },
    { trackName: "Ανισόπεδη Ντίσκο", artistName: "Pan Pan, Kalliopi Mitropoulou", albumName: "Φαντασμαγορία Τρία" },
    { trackName: "disco tits", artistName: "Tove Lo", albumName: "BLUE LIPS (lady wood phase II)" },
    { trackName: "Why Can't I Be You?", artistName: "The Cure", albumName: "Kiss Me, Kiss Me, Kiss Me" },
    { trackName: "Turn to Stone", artistName: "Electric Light Orchestra", albumName: "Out of the Blue" }
];

function getRandomSong() {
    const randomIndex = Math.floor(Math.random() * songList.length);
    const song = songList[randomIndex];
    const rec = `Track Name: ${song.trackName},</br> Artist: ${song.artistName}, </br> Album: ${song.albumName}`;
    return rec;
}
function getRec(){
    var txt = getRandomSong();
    var str = document.getElementById("rec").innerHTML = txt;
}