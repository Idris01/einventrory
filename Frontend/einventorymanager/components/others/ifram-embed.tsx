'use cleint'

import React from 'react'

interface IframeEmbedProps {
    embedId: string
}

function IframeEmbed({
    embedId
    }: IframeEmbedProps) {
  return (
    <div className='aspect-w-16 aspect-h-9'>
        <iframe
            className='w-full md:min-w-[32rem] bg-red-300'
            width='500'
            height='315'
            src={`https://www.youtube.com/embed/${embedId}`}
            title='Embed'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
        >

        </iframe>
    </div>
  )
}

export default IframeEmbed