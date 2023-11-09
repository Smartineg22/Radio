input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Skull)
})
input.onSound(DetectedSound.Loud, function () {
	
})
basic.forever(function () {
	
})
