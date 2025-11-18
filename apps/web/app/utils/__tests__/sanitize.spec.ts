import { describe, it, expect } from 'vitest'
import {
  escapeHtml,
  sanitizeText,
  sanitizeHtml,
  sanitizeUrl,
  sanitizeFilename,
  sanitizeSearchQuery,
  sanitizeEmail,
  sanitizePhone,
} from '../sanitize'

describe('sanitize utils', () => {
  describe('escapeHtml', () => {
    it('should escape HTML entities', () => {
      expect(escapeHtml('<script>alert("xss")</script>')).toBe(
        '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;',
      )
    })

    it('should escape ampersands', () => {
      expect(escapeHtml('Tom & Jerry')).toBe('Tom &amp; Jerry')
    })

    it('should escape quotes', () => {
      expect(escapeHtml(`He said "hello"`)).toBe('He said &quot;hello&quot;')
      expect(escapeHtml("It's working")).toBe('It&#x27;s working')
    })
  })

  describe('sanitizeText', () => {
    it('should remove HTML tags', () => {
      expect(sanitizeText('<b>Hello</b> World!')).toBe('Hello World!')
    })

    it('should escape remaining HTML entities', () => {
      expect(sanitizeText('5 < 10 & 10 > 5')).toBe('5 &lt; 10 &amp; 10 &gt; 5')
    })

    it('should normalize whitespace when requested', () => {
      expect(sanitizeText('  Multiple   spaces  ', { normalizeWhitespace: true })).toBe(
        'Multiple spaces',
      )
    })

    it('should remove newlines by default', () => {
      expect(sanitizeText('Line 1\nLine 2\r\nLine 3')).toBe('Line 1 Line 2 Line 3')
    })

    it('should keep newlines when allowed', () => {
      expect(sanitizeText('Line 1\nLine 2', { allowNewlines: true })).toBe('Line 1\nLine 2')
    })

    it('should truncate to max length', () => {
      expect(sanitizeText('This is a long text', { maxLength: 10 })).toBe('This is a ')
    })
  })

  describe('sanitizeHtml', () => {
    it('should remove script tags', () => {
      expect(sanitizeHtml('<p>Hello <script>alert("xss")</script></p>')).toBe('<p>Hello </p>')
    })

    it('should remove style tags', () => {
      expect(sanitizeHtml('<p>Hello <style>body{color:red}</style></p>')).toBe('<p>Hello </p>')
    })

    it('should remove event handlers', () => {
      expect(sanitizeHtml('<p onclick="alert()">Click</p>')).toBe('<p>Click</p>')
      expect(sanitizeHtml('<p onload="evil()">Load</p>')).toBe('<p>Load</p>')
    })

    it('should remove javascript: URLs', () => {
      expect(sanitizeHtml('<a href="javascript:alert()">Link</a>')).toBe('<a href="">Link</a>')
    })

    it('should allow safe HTML tags', () => {
      expect(sanitizeHtml('<p><b>Bold</b> <i>Italic</i></p>')).toContain('<b>')
      expect(sanitizeHtml('<p><b>Bold</b> <i>Italic</i></p>')).toContain('<i>')
    })

    it('should allow safe attributes', () => {
      expect(sanitizeHtml('<a href="https://example.com" title="Link">Link</a>')).toContain('href')
      expect(sanitizeHtml('<a href="https://example.com" title="Link">Link</a>')).toContain('title')
    })

    it('should remove unsafe attributes', () => {
      expect(sanitizeHtml('<p id="test" onclick="alert()">Text</p>')).not.toContain('id')
      expect(sanitizeHtml('<p id="test" onclick="alert()">Text</p>')).not.toContain('onclick')
    })

    it('should strip disallowed tags', () => {
      expect(sanitizeHtml('<div>Hello</div>')).toBe('Hello')
      expect(sanitizeHtml('<iframe src="evil.com"></iframe>')).toBe('')
    })
  })

  describe('sanitizeUrl', () => {
    it('should allow http and https URLs', () => {
      expect(sanitizeUrl('https://example.com')).toBe('https://example.com/')
      expect(sanitizeUrl('http://example.com')).toBe('http://example.com/')
    })

    it('should allow mailto URLs', () => {
      expect(sanitizeUrl('mailto:test@example.com')).toBe('mailto:test@example.com')
    })

    it('should reject javascript: URLs', () => {
      expect(sanitizeUrl('javascript:alert("xss")')).toBe('')
    })

    it('should reject data: URLs', () => {
      expect(sanitizeUrl('data:text/html,<script>alert("xss")</script>')).toBe('')
    })

    it('should allow relative URLs by default', () => {
      expect(sanitizeUrl('/path/to/page')).toBe('/path/to/page')
    })

    it('should reject relative URLs with protocol', () => {
      expect(sanitizeUrl('//javascript:alert()')).toBe('')
    })

    it('should reject invalid URLs', () => {
      expect(sanitizeUrl('not a url')).toBe('')
    })

    it('should trim whitespace', () => {
      expect(sanitizeUrl('  https://example.com  ')).toBe('https://example.com/')
    })
  })

  describe('sanitizeFilename', () => {
    it('should remove path traversal attempts', () => {
      expect(sanitizeFilename('../../etc/passwd')).toBe('passwd')
      expect(sanitizeFilename('../../../secret.txt')).toBe('secret.txt')
    })

    it('should remove dangerous characters', () => {
      expect(sanitizeFilename('my<script>.txt')).toBe('myscript.txt')
      expect(sanitizeFilename('file|name?.doc')).toBe('filename.doc')
    })

    it('should remove leading dots', () => {
      expect(sanitizeFilename('.hidden')).toBe('hidden')
      expect(sanitizeFilename('...file')).toBe('file')
    })

    it('should validate allowed extensions', () => {
      expect(
        sanitizeFilename('document.pdf', {
          allowedExtensions: ['pdf', 'doc'],
        }),
      ).toBe('document.pdf')

      expect(
        sanitizeFilename('script.exe', {
          allowedExtensions: ['pdf', 'doc'],
        }),
      ).toBe('script')
    })

    it('should truncate to max length preserving extension', () => {
      expect(
        sanitizeFilename('very-long-filename.txt', {
          maxLength: 15,
        }),
      ).toBe('very-long-f.txt')
    })

    it('should use fallback for empty filename', () => {
      expect(sanitizeFilename('...')).toBe('file')
      expect(sanitizeFilename('<<<')).toBe('file')
    })
  })

  describe('sanitizeSearchQuery', () => {
    it('should remove SQL injection attempts', () => {
      expect(sanitizeSearchQuery("'; DROP TABLE users; --")).toBe('DROP TABLE users')
    })

    it('should remove backslashes', () => {
      expect(sanitizeSearchQuery('test\\escape')).toBe('testescape')
    })

    it('should remove wildcards by default', () => {
      expect(sanitizeSearchQuery('test*search%')).toBe('testsearch')
    })

    it('should allow wildcards when specified', () => {
      expect(sanitizeSearchQuery('test*search%', { allowWildcards: true })).toBe('test*search%')
    })

    it('should normalize whitespace', () => {
      expect(sanitizeSearchQuery('  multiple   spaces  ')).toBe('multiple spaces')
    })

    it('should truncate to max length', () => {
      expect(sanitizeSearchQuery('very long search query', { maxLength: 10 })).toBe('very long ')
    })
  })

  describe('sanitizeEmail', () => {
    it('should validate and normalize email addresses', () => {
      expect(sanitizeEmail('User@Example.COM')).toBe('user@example.com')
      expect(sanitizeEmail('  test@test.com  ')).toBe('test@test.com')
    })

    it('should reject invalid email addresses', () => {
      expect(sanitizeEmail('not-an-email')).toBe('')
      expect(sanitizeEmail('missing@domain')).toBe('')
      expect(sanitizeEmail('@nodomain.com')).toBe('')
      expect(sanitizeEmail('no@domain@here.com')).toBe('')
    })

    it('should reject email addresses that are too long', () => {
      const longEmail = 'a'.repeat(250) + '@example.com'
      expect(sanitizeEmail(longEmail)).toBe('')
    })

    it('should allow valid international domains', () => {
      expect(sanitizeEmail('test@example.co.uk')).toBe('test@example.co.uk')
    })
  })

  describe('sanitizePhone', () => {
    it('should remove formatting by default', () => {
      expect(sanitizePhone('+1 (555) 123-4567')).toBe('+15551234567')
    })

    it('should keep formatting when requested', () => {
      expect(sanitizePhone('+1 (555) 123-4567', { keepFormatting: true })).toBe('+1 (555) 123-4567')
    })

    it('should remove invalid characters', () => {
      expect(sanitizePhone('555-abc-1234')).toBe('5551234')
    })

    it('should keep + only at the start', () => {
      expect(sanitizePhone('1+555+1234')).toBe('+15551234')
    })
  })
})
