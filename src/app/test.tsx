import React from 'react'

import Image from 'next/image'

import responsiveImage from 'src/assets/img/img-test.png'

const Test: React.FC = () => {
  return (
    <div>
      <Image src={responsiveImage} alt="image-1" width={500} height={500} />
      <Image src={'/img/img-test-public.png'} alt="image-2" width={500} height={500} />
    </div>
  )
}

export default Test
