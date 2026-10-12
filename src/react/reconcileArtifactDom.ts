/** Preserve existing elements while updating streamed text, attributes, and marks. */
export function reconcileArtifactDom(target: Node, incoming: Node): void {
  const sync = (parent: Node, nextParent: Node) => {
    const children = Array.from(parent.childNodes).filter((node) => !(node instanceof Element && node.hasAttribute('data-visualize-platform-normalize')))
    const nextChildren = Array.from(nextParent.childNodes)
    nextChildren.forEach((next, index) => {
      const current = children[index]
      const compatible = current && current.nodeType === next.nodeType
        && (!(current instanceof Element) || (next instanceof Element && current.tagName === next.tagName && current.namespaceURI === next.namespaceURI))
      if (!compatible) {
        const copy = next.cloneNode(true)
        if (current) parent.replaceChild(copy, current)
        else parent.appendChild(copy)
        return
      }
      if (current instanceof Element && next instanceof Element) {
        Array.from(current.attributes).forEach((attr) => {
          if (!next.hasAttribute(attr.name) && attr.name !== 'data-visualize-root') current.removeAttribute(attr.name)
        })
        Array.from(next.attributes).forEach((attr) => {
          if (current.getAttribute(attr.name) !== attr.value) current.setAttribute(attr.name, attr.value)
        })
        sync(current, next)
      } else if (current.nodeValue !== next.nodeValue) current.nodeValue = next.nodeValue
    })
    children.slice(nextChildren.length).forEach((node) => parent.removeChild(node))
  }
  sync(target, incoming)
}
