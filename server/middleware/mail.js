const nodemailer = require('nodemailer')

const config = require('../../config')
const datetime = require('../../client/lib/datetime').default

let transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: config.mail.user,
    pass: config.mail.pass
  }
})

exports.inputInvalidPwdManyTimes = function (target) {
  const from = config.mail.sender
  const to = target
  const subject = '请注意：您的账号登录时密码输入错误超过5次！'
  const date = datetime.toRegular(new Date())
  const html = `
                <div style='color: #000; font-weight: 900; background-image: repeating-linear-gradient(-45deg, grey, grey 5px, white 5px, white 10px);'>
                  <h1>唔定啦~唔定啦~</h1>
                  <p>>>> 哪，唔吼玩住先，我话比你知啊：<p/>
                  <p>>>> 你噶账号${target}系<span style='color: red;'>${date}</span>个阵</p>
                  <p>>>> 登录<a href="https://www.hellojm.cn">https://www.hellojm.cn</a>时输入密码错误超过<span style='font-size: 24px; color: red;'>${config.mail.times}</span>次咯喔！</p>
                  <div style='overflow-x: hidden;'>
                    <img style='width: 100%' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQBAMAAAAVaP+LAAAAGFBMVEUAAABTU1NNTU1TU1NPT09SUlJSUlJTU1O8B7DEAAAAB3RSTlMAoArVKvVgBuEdKgAAAJ1JREFUeF7t1TEOwyAMQNG0Q6/UE+RMXD9d/tC6womIFSL9P+MnAYOXeTIzMzMzMzMzaz8J9Ri6HoITmuHXhISE8nEh9yxDh55aCEUoTGbbQwjqHwIkRAEiIaG0+0AA9VBMaE89Rogeoww936MQrWdBr4GN/z0IAdQ6nQ/FIpRXDwHcA+JIJcQowQAlFUA0MfQpXLlVQfkzR4igS6ENjknm/wiaGhsAAAAASUVORK5CYII='/>
                  </div>
                  <p>>>> 你喇喇声去睇睇系咪有人搞屎搞棍先啦！</p>
                  <p>>>> 系甘先，see you lala!</p>
                </div>
                `
  return new Promise(function (resolve, reject) {
    transporter.sendMail({
      from, to, subject, html, date
    }, (err, info) => {
      if (err) {
        reject(err)
      } else {
        resolve(info.accepted)
      }
    })
  })
}
