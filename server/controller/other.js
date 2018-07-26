module.exports = {

  getIp: async (ctx) => {
    
    console.log(ctx.req.socket.remoteAddress)

    ctx.status = 200
    ctx.body = {
      ip: ctx.address
    }

  }

}