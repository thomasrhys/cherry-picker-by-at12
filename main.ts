sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeCountdownBy(0.5)
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let cherry = 0
let time_gained = 0
let ahjgkbf = 60
game.splash("cherry picker")
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    .....6eeeeeeeeeece6.....
    ....6776eeeeeeeee676....
    ...6776666eeee6766776...
    ..6776ee77777777667776..
    ...668ce7768867788666...
    ......ce77eeee67ee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......beeeeeeeeeeb......
    .......beeeeeeeeb.......
    ........beeeeeeb........
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.startCountdown(ahjgkbf)
info.setScore(1.1111111111111111e+291)
game.onUpdateInterval(1000, function () {
    time_gained = 0
    cherry = 0
    sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Food).setPosition(randint(0, 160), randint(0, 120))
})
