import React from 'react'

const Loading = () => {

  let loadingCard = []
  for (let i = 0; i < 8; i++) {
    loadingCard.push(
      <div className='max-w-[250px] min-h-[250px] md:min-h-[290px] rounded-[10px] [box-shadow:0px_0px_1px_rgb(12,_20,_23)] relative h-full w-full'>
        <img className="absolute top-0" src="https://raw.githubusercontent.com/prafful98/vue3-shimmer/HEAD/assets/card.gif"></img>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-[repeat(2,180px)] md:grid-cols-[repeat(4,280px)] mx-[auto] my-[0] max-w-[1160px] justify-center w-full gap-[10px]'>
      {loadingCard}
    </div>
  )
}

export default Loading