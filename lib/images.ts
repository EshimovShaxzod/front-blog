import fon1 from '@/assets/images/fon1.jpg'
import fon2 from '@/assets/images/fon2.jpg'
import fon3 from '@/assets/images/fon3.jpg'
import fon4 from '@/assets/images/fon4.jpg'
import fon5 from '@/assets/images/fon5.jpg'
import { StaticImageData } from 'next/image'

export type ImageType = {
    src: StaticImageData
    alt: string
}

export const images: ImageType[] = [
    {
        src: fon1,
        alt: 'fon1'
    }, 
    {
        src: fon2,
        alt: 'fon2'
    },
    {
        src: fon3,
        alt: 'fon3'
    },
    {
        src: fon4,
        alt: 'fon4'
    },
    {
        src: fon5,
        alt: 'fon5'
    }
]