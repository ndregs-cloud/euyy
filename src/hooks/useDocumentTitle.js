import { useEffect } from 'react'

/** Keeps the browser tab in step with the editorial context. */
export default function useDocumentTitle(title) {
  useEffect(() => {
    const previous = document.title
    if (title) document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
