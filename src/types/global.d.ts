// Global type definitions for the project

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      NEXT_PUBLIC_APP_URL?: string
      NEXT_PUBLIC_GA_ID?: string
    }
  }

  // CSS Module types
  declare module '*.module.css' {
    const classes: { [key: string]: string }
    export default classes
  }

  declare module '*.module.scss' {
    const classes: { [key: string]: string }
    export default classes
  }

  // SVG imports
  declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
  }

  // Image imports
  declare module '*.png'
  declare module '*.jpg'
  declare module '*.jpeg'
  declare module '*.gif'
  declare module '*.webp'
}

export {}
