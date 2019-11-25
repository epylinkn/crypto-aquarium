class GenericScene {
  enter() {
    socket.emit('scene', mgr.scene.oScene.constructor.name)
  }
}
