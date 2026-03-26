export type ComponentSize = 'small' | 'medium' | 'large'
export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

export interface BaseComponentProps {
  /**
   * Additional CSS class names
   */
  className?: string
  /**
   * Test identifier for automated testing
   */
  'data-testid'?: string
}
