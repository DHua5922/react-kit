import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import styles from './LiveCodeBlock.module.css'

export type LiveCodeScope = Record<string, unknown>

const theme = {
  plain: {
    backgroundColor: '#f6f8fa',
    color: '#24292e',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#6a737d',
        fontStyle: 'italic' as const,
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#032f62',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#24292e',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#005cc5',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#d73a49',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#6f42c1',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#6f42c1',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#d73a49',
      },
    },
  ],
}

interface LiveCodeBlockProps {
  /**
   * The initial code to display in the editor
   */
  code: string
  /**
   * Additional values exposed to the live runtime
   */
  scope?: LiveCodeScope
  /**
   * Whether to evaluate the snippet as a single expression
   */
  noInline?: boolean
}

export const LiveCodeBlock: React.FC<LiveCodeBlockProps> = ({
  code,
  scope = {},
  noInline = false,
  ...props
}) => {
  const liveScope = {
    React,
    ...scope,
  }

  return (
    <>
      <LiveProvider
        code={code}
        scope={liveScope}
        theme={theme}
        noInline={noInline}
        {...props}
      >
        <div className={styles['header']}>RESULT</div>
        <LivePreview className={styles['live-preview']} />

        <div className={styles['header']}>CODE EDITOR</div>
        <LiveEditor className={styles['live-editor']} />

        <LiveError className={styles['live-error']} />
      </LiveProvider>
    </>
  )
}

export default LiveCodeBlock
