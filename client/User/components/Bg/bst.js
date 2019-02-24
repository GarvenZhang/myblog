import BST from '../../../lib/bst'

function setWidth (tree) {
  if (tree === null) {
    return 0
  }

  if (tree.width > 0) {
    return tree.width
  }

  if (!(tree.left || tree.right)) {
    tree.width = 60
    return 60
  }

  tree.width = setWidth(tree.left) + setWidth(tree.right) + 45
  return tree.width
}

let curY = 100

function setPosition (tree, left, right) {
  if (tree === null) {
    return
  }

  const x = (left + right) >> 1
  tree.position = {
    x,
    y: curY
  }

  curY += 90

  setPosition(tree.left, x - tree.width / 2, x)
  setPosition(tree.right, x, x + tree.width / 2)

  curY -= 90
}

function draw (tree, ctx, predecessor = null) {
  if (tree === null) {
    return
  }

  const x = tree.position.x
  const y = tree.position.y

  ctx.beginPath()
  ctx.arc(x, y, 30, 0, Math.PI * 2, false)

  if (predecessor) {
    ctx.moveTo(x, y - 30)
    ctx.lineTo(predecessor.position.x, predecessor.position.y + 30)
  }

  ctx.stroke()

  ctx.fillText(tree.data, x - 12, y + 12)
  draw(tree.left, ctx, tree)
  draw(tree.right, ctx, tree)
}

let inOrder = ''
let preOrder = ''
let postOrder = ''

function writeText (ctx, bst) {
  ctx.font = '16px cursive'

  bst.inOrder(bst.root, data => inOrder += `${data} `)
  bst.preOrder(bst.root, data => preOrder += `${data} `)
  bst.postOrder(bst.root, data => postOrder += `${data} `)

  ctx.fillText(inOrder, 100, 400)
  ctx.fillText(preOrder, 50, 450)
  ctx.fillText(postOrder, 80, 500)
}

export default function (ctx) {
  let bst = new BST()
  bst.insert(77)
  bst.insert(34)
  bst.insert(9)
  bst.insert(120)
  bst.insert(83)
  bst.insert(11)
  bst.insert(56)
  bst.insert(2)
  bst.insert(98)

  setWidth(bst.root)
  setPosition(bst.root, 0, 600)

  ctx.strokeStyle = 'rgba(0, 249, 0, .2)'
  ctx.fillStyle = 'rgba(0, 249, 0, .2)'
  ctx.font = '24px cursive'
  ctx.textAligin = 'center'

  draw(bst.root, ctx)

  writeText(ctx, bst)
}
