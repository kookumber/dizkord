const roomSignalingDataHandler = (socket, signalData) => {
    const { connUserSocketId, signal } = signalData

    const signalingData = { signal, connUserSocketId: socket.id}

    socket.to(connUserSocketId).emit('conn-signal', signalingData)
}

module.exports = roomSignalingDataHandler