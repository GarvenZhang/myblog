module.exports = {

  getIp: async (ctx) => {
    
    ctx.status = 200
    ctx.body = {
      ip: ctx.address
    }

  }

}