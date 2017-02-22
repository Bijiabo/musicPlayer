/**
 * Created by huchunbo on 2017/2/22.
 */
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            console.log(new RegExp(parameterName, 'i').test(item));
            tmp = item;
            if (new RegExp(parameterName, 'i').test(item)) {
                result = decodeURIComponent(tmp.replace(parameterName+'=',''));
            }
            // result = decodeURIComponent(tmp.replace(parameterName+'=',''));
            // if (tmp[0] === parameterName) {
                // tmp.shift(0);
                // result = decodeURIComponent(tmp);
            // }
        });
    return result;
}

var songName = findGetParameter('name') || '无',
    singer = findGetParameter('singer') || '未知歌手',
    songUrl = findGetParameter('mp3') || '';

var ap = new APlayer({
    element: document.getElementById('player1'),                       // Optional, player element
    narrow: false,                                                     // Optional, narrow style
    autoplay: true,                                                    // Optional, autoplay song(s), not supported by mobile browsers
    showlrc: 0,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
    mutex: true,                                                       // Optional, pause other players when this player playing
    theme: '#e6d0b2',                                                  // Optional, theme color, default: #b7daff
    mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
    preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
    listmaxheight: '513px',                                             // Optional, max height of play list
    music: {                                                           // Required, music info, see: ###With playlist
        title: songName,                                          // Required, music title
        author: singer,                          // Required, music author
        url: songUrl,  // Required, music url
        pic: 'http://okw4n9e5h.bkt.clouddn.com/%E4%BA%A7%E5%93%81%E7%8B%97.jpg',  // Optional, music picture
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'                   // Optional, lrc, see: ###With lrc
    }
});