import { useState, useEffect } from 'react'

export const useScrollSpy = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return

        // Pick the "most visible" section to avoid flapping between overlapping sections.
        const best = visible.reduce((acc, cur) => {
          if (!acc) return cur

          if (cur.intersectionRatio !== acc.intersectionRatio) {
            return cur.intersectionRatio > acc.intersectionRatio ? cur : acc
          }

          const curTop = cur.boundingClientRect?.top ?? 0
          const accTop = acc.boundingClientRect?.top ?? 0
          return curTop > accTop ? cur : acc
        }, null)

        if (best?.target?.id) setActiveSection(best.target.id)
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [sectionIds])

  return activeSection
}
