import { useEffect, useRef, useState } from 'react'

/** Pace received append bursts, not network traffic. Existing final reports stay instant. */
export function useStreamingCode(code: string, final: boolean, enabled: boolean) {
  const streamed = useRef(!final)
  const target = useRef(code)
  target.current = code
  if (!final) streamed.current = true
  const [visibleCode, setVisibleCode] = useState(final ? code : '')
  const displayed = useRef(visibleCode)

  useEffect(() => {
    if (!enabled || !streamed.current) {
      displayed.current = code
      setVisibleCode(code)
      return undefined
    }
    let frame: number
    const advance = () => {
      const next = String(target.current || '')
      const previous = displayed.current
      const remaining = next.length - previous.length
      const step = Math.max(4, Math.ceil(remaining / 6))
      // Replacements are not append streams; never animate a stale prefix.
      const value = next.startsWith(previous) ? next.slice(0, previous.length + step) : next
      displayed.current = value
      setVisibleCode(value)
      if (value !== next) frame = requestAnimationFrame(advance)
    }
    frame = requestAnimationFrame(advance)
    return () => cancelAnimationFrame(frame)
  }, [code, final, enabled])

  return { code: enabled ? visibleCode : code, final: final && (!enabled || visibleCode === code) }
}
