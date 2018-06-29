export default function (e) {
  // 修改key
  const key = e.target.value

  // 空则
  if (key === '') {
    this.setState({
      key,
      selectedData: []
    })
    return
  }

  // 修改selectedData
  let selectedData = []
  this.props.data.forEach(item => {
    let pos = item.name.indexOf(key)
    if ( pos > -1) {
      selectedData.push({
        ...item,
        pos
      })
    }
  })

  // 排序
  selectedData = selectedData.sort(function (prev, next) {
    return prev - next
  })

  // 改变状态
  this.setState({
    key,
    selectedData
  })
}