function flip(){
  let result = ''
  const cpu = Math.random()
  if (cpu >= 0.5){
      result = 'Head'

  }else {
    result = 'Tail'
  }
  console.log(result)
}

