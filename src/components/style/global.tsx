import { GlobalProps } from '@emotion/react'

export const globalStyle  = {
  colors: {
    
  },
  components: {
    Button: {
    },
    ListItem: {
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
    }
  },
  styles: {
    global: {
      'html, body': {
        'margin': 0,
        'padding': 0,
      
        fontFamily: 'nunito_for_arco,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif',
        fontVariantNumeric: 'tabular-nums',
        fontWeight: 400,
      },
      '#root': {
        'display': 'flex',
        'width': '100vw',
        'height': '100vh',
        'overflow': 'hidden',
      },
      
      'button': {
        'border': 'none',
        boxShadow: 'none',
        'outline': 'none',
        'appearance': 'none',
      },
      
      'p, ul': {
        'margin': 0,
        'padding': 0,
      },
      
      'a': {
        textDecoration: 'none',
      },
      
      'input': {
        minWidth: 0,
        'appearance': 'none',
        'border': 'none',
        boxShadow: 'none',
      },
      
      'p, span': {
        'cursor': 'inherit',
      },
      
      '*::-webkit-scrollbar': {
        'width': '2px',
        borderRadius: '2px',
      },
      
      'h1, h2, h3, h4, h5, h6': {
        'margin': 0,
        'padding': 0,
      }
    }
  }
}
