import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:'OpenRGD — Robot Graph Definition',
    short_name:'OpenRGD',
    description:'An open, machine-readable standard for cognitive embodiment and robot interoperability.',
    start_url:'/',
    display:'standalone',
    background_color:'#07090d',
    theme_color:'#07090d',
    lang:'en',
    icons:[
      {
        src:'/icon.svg',
        sizes:'any',
        type:'image/svg+xml',
      },
    ],
  }
}
