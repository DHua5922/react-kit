import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

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
   * Whether to show the live preview
   */
  showPreview?: boolean
  /**
   * Whether to show errors
   */
  showError?: boolean
  /**
   * Height of the code editor
   */
  editorHeight?: string
  /**
   * Title for the code block
   */
  title?: string
  /**
   * Additional values exposed to the live runtime
   */
  scope?: LiveCodeScope
  /**
   * Whether to evaluate the snippet as a single expression
   */
  noInline?: boolean
}

/**
 * Live Code Block component for interactive code editing
 */
export const LiveCodeBlock: React.FC<LiveCodeBlockProps> = ({
  code,
  showPreview = true,
  showError = true,
  editorHeight = '200px',
  title,
  scope = {},
  noInline = false,
}) => {
  const liveScope = {
    React,
    ...scope,
  }

  return (
    <div
      style={{
        border: '1px solid #e1e4e8',
        borderRadius: '8px',
        overflow: 'hidden',
        margin: '16px 0',
      }}
    >
      {title && (
        <div
          style={{
            backgroundColor: '#f6f8fa',
            padding: '12px 16px',
            borderBottom: '1px solid #e1e4e8',
            fontWeight: 600,
            fontSize: '14px',
            color: '#24292e',
          }}
        >
          {title}
        </div>
      )}

      <LiveProvider
        code={code}
        scope={liveScope}
        theme={theme}
        noInline={noInline}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: showPreview ? '1fr 1fr' : '1fr',
          }}
        >
          {/* Code Editor */}
          <div
            style={{
              borderRight: showPreview ? '1px solid #e1e4e8' : 'none',
            }}
          >
            <div
              style={{
                backgroundColor: '#f6f8fa',
                padding: '8px 16px',
                borderBottom: '1px solid #e1e4e8',
                fontSize: '12px',
                fontWeight: 600,
                color: '#586069',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              ✏️ Edit Code
            </div>
            <LiveEditor
              style={{
                fontFamily:
                  '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas", monospace',
                fontSize: '14px',
                lineHeight: '1.5',
                minHeight: editorHeight,
                padding: '16px',
                overflow: 'auto',
                backgroundColor: '#fff',
              }}
            />
          </div>

          {/* Live Preview */}
          {showPreview && (
            <div>
              <div
                style={{
                  backgroundColor: '#f6f8fa',
                  padding: '8px 16px',
                  borderBottom: '1px solid #e1e4e8',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#586069',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                👀 Live Preview
              </div>
              <div
                style={{
                  padding: '24px',
                  minHeight: editorHeight,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  overflow: 'auto',
                }}
              >
                <LivePreview />
              </div>
            </div>
          )}
        </div>

        {/* Error Display */}
        {showError && (
          <div
            style={{
              borderTop: '1px solid #e1e4e8',
              backgroundColor: '#ffeaea',
            }}
          >
            <LiveError
              style={{
                fontFamily:
                  '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas", monospace',
                fontSize: '14px',
                color: '#d73a49',
                padding: '16px',
                margin: 0,
                whiteSpace: 'pre-wrap',
                backgroundColor: 'transparent',
              }}
            />
          </div>
        )}
      </LiveProvider>
    </div>
  )
}

export default LiveCodeBlock
