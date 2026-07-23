import React, { useEffect, useRef, useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import styles from './index.module.css'
import CopyButton from '../CopyButton'

interface LiveEditorHeaderProps {
  copied: boolean
  copyCode: () => void
}

interface LiveCodeBlockProps {
  code: string
  enableTypeScript?: boolean
  /**
   * Additional values exposed to the live runtime
   */
  scope?: Record<string, unknown>
  /**
   * Whether to evaluate the snippet as a single expression
   */
  noInline?: boolean
}

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

function useLiveCodeBlock(code: string) {
  const [editableCode, setEditableCode] = useState('')
  const [copied, setCopied] = useState(false)
  const copiedTimeout = useRef<ReturnType<typeof setTimeout>>()

  const copyCode = async () => {
    await navigator.clipboard.writeText(editableCode)
    setCopied(true)
    clearTimeout(copiedTimeout.current)
    copiedTimeout.current = setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    setEditableCode(code)
  }, [code])

  useEffect(
    () => () => {
      clearTimeout(copiedTimeout.current)
    },
    []
  )

  return {
    editableCode,
    setEditableCode,
    copied,
    copyCode,
  }
}

export default function LiveCodeBlock({
  code,
  scope = {},
  noInline = false,
  ...props
}: LiveCodeBlockProps) {
  const { editableCode, setEditableCode, copied, copyCode } =
    useLiveCodeBlock(code)

  const liveScope = {
    React,
    ...scope,
  }

  return (
    <LiveProvider
      code={editableCode}
      scope={liveScope}
      theme={theme}
      noInline={noInline}
      enableTypeScript
      {...props}
    >
      <div className={styles['header']}>RESULT</div>
      <LivePreview className={styles['live-preview']} />

      <LiveEditorHeader copied={copied} copyCode={copyCode} />
      <LiveEditor
        className={styles['live-editor']}
        onChange={setEditableCode}
      />

      <LiveError className={styles['live-error']} />
    </LiveProvider>
  )
}

function LiveEditorHeader({ copied, copyCode }: LiveEditorHeaderProps) {
  return (
    <div className={`${styles['header']} ${styles['editor-header']}`}>
      <span>CODE EDITOR</span>
      <CopyButton copied={copied} onClick={copyCode} />
    </div>
  )
}
