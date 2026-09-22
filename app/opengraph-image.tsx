import { ImageResponse } from 'next/og'

export const alt='OpenRGD — Robot Graph Definition'
export const size={width:1200,height:630}
export const contentType='image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width:'100%',
          height:'100%',
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          background:'#07090d',
          color:'#f2f6f8',
          padding:'72px',
          fontFamily:'sans-serif',
        }}
      >
        <div style={{display:'flex',alignItems:'center',gap:'18px',fontSize:'24px',fontWeight:700}}>
          <div style={{width:'18px',height:'18px',borderRadius:'50%',background:'#79e6ff'}} />
          OpenRGD
        </div>
        <div style={{display:'flex',flexDirection:'column',maxWidth:'1000px'}}>
          <div style={{fontSize:'22px',letterSpacing:'0.16em',color:'#79e6ff',fontWeight:700}}>
            ROBOT GRAPH DEFINITION
          </div>
          <div style={{fontSize:'72px',lineHeight:1.02,letterSpacing:'-0.045em',fontWeight:700,marginTop:'24px'}}>
            Machine-readable cognitive embodiment.
          </div>
          <div style={{fontSize:'28px',lineHeight:1.45,color:'#8e9aa8',marginTop:'28px'}}>
            An open standard for robot semantics, interoperability and grounded AI context.
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:'18px',color:'#647180'}}>
          <span>openrgd.org</span>
          <span>STANDARD · TOOLCHAIN · RESEARCH</span>
        </div>
      </div>
    ),
    size
  )
}
