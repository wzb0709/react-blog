const TagColor = [
  'magenta','red','volcano','orange','gold','lime','green','cyan','blue','geekblue','purple'
]

export const getTagColor = () => {
  const index = Math.floor((Math.random()*TagColor.length));
  return TagColor[index]
}

