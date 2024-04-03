export default class sala extends Phaser.Scene {
  constructor () {
    super('sala')
  }

  preload () {
    this.load.audio('iniciar', './assets/iniciar.mp3')

    this.load.image('fundo', './assets/fundo.png')
  }

  create () {
    this.iniciar = this.sound.add('iniciar')

    this.add.image(400, 225, 'fundo')

    this.add.text(100, 50, 'Sala 1')
      .setInteractive()
      .on('pointerdown', () => {
        this.iniciar.play()
        this.game.scene.stop('sala')
        this.game.scene.start('mapa')
      })
  }

  update () {
  }
}
