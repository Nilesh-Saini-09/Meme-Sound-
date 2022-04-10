const aud = {
    '2000yearslater': 'sounds/2000yearslater.mp3',
    'aah': 'sounds/aah.mp3',
    'baskarbhai': 'sounds/baskarbhai.mp3',
    'emotionaldamage': 'sounds/emotionaldamage.mp3',
    'fewmomentslater': 'sounds/fewmomentslater.mp3',
    'gajabbejetti': 'sounds/gajabbejetti.mp3',
    'kaunhaiyehlog': 'sounds/kaunhaiyehlog.mp3',
    'mazaaya': 'sounds/mazaaya.mp3',
    'nahimbbs': 'sounds/nahimbbs.mp3',
    'omgwow': 'sounds/omgwow.mp3',
    'test': 'sounds/test.mp3',
}

const play = (id) => {
    const audio = new Audio();
    audio.src = aud[id];
    audio.play();
}