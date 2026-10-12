import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { expect, it, vi } from 'vitest'
import { useStreamingCode } from './useStreamingCode'

it('paces bursts, drains the final suffix, resets replacements, and cancels unmounted frames', () => {
  const callbacks = new Map<number, FrameRequestCallback>()
  let id = 0
  vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => { callbacks.set(++id, cb); return id })
  vi.stubGlobal('cancelAnimationFrame', (key: number) => callbacks.delete(key))
  const host = document.createElement('div')
  const root = createRoot(host)
  let result = { code: '', final: false }
  function Harness(props: { code: string; final: boolean; enabled: boolean }) {
    result = useStreamingCode(props.code, props.final, props.enabled)
    return null
  }
  const render = (code: string, final = false, enabled = true) => act(() => root.render(<Harness code={code} final={final} enabled={enabled} />))
  const tick = () => act(() => {
    const batch = [...callbacks.values()]
    callbacks.clear()
    batch.forEach(cb => cb(0))
  })
  try {
    render('a'.repeat(120))
    tick()
    expect(result.code).toBe('a'.repeat(20))
    render('a'.repeat(180), true)
    expect(result.final).toBe(false)
    for (let n = 0; n < 100 && callbacks.size; n++) tick()
    expect(result).toEqual({ code: 'a'.repeat(180), final: true })
    render('replacement')
    tick()
    expect(result.code).toBe('replacement')
    render('instant', false, false)
    expect(result.code).toBe('instant')
    render('instant and more')
    act(() => root.unmount())
    expect(callbacks.size).toBe(0)
  } finally {
    vi.unstubAllGlobals()
  }
})

it('does not animate a saved final report on initial mount', () => {
  const host = document.createElement('div')
  const root = createRoot(host)
  let result
  function Harness() { result = useStreamingCode('saved report', true, true); return null }
  try {
    act(() => root.render(<Harness />))
    expect(result).toEqual({ code: 'saved report', final: true })
  } finally { act(() => root.unmount()) }
})
