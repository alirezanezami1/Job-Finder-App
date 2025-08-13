// src/plugins/tooltipPlugin.js

export default {
  install(app, options) {
    const defaultPosition = options?.defaultPosition || 'top'

    app.directive('tooltip', {
      mounted(el, binding) {
        const tooltipEl = document.createElement('div')
        tooltipEl.classList.add(
          'absolute',
          'z-50',
          'px-3',
          'py-1.5',
          'text-sm',
          'font-semibold',
          'bg-primary100',
          'text-black',
          'rounded-md',
          'opacity-0',
          'pointer-events-none',
          'transition-opacity',
          'whitespace-nowrap',
        )
        tooltipEl.textContent = binding.value

        if (binding.modifiers.dark) {
          tooltipEl.classList.add('tooltip-dark')
        }
        document.body.appendChild(tooltipEl)

        el._tooltipEl = tooltipEl

        const showTooltip = () => {
          const rect = el.getBoundingClientRect()

          const position = binding.arg || defaultPosition

          if (position === 'top') {
            tooltipEl.style.left = `${rect.left + rect.width / 2}px`
            tooltipEl.style.top = `${rect.top - 10}px`
            tooltipEl.style.transform = 'translateX(-50%) translateY(-100%)'
          } else if (position === 'bottom') {
            tooltipEl.style.left = `${rect.left + rect.width / 2}px`
            tooltipEl.style.top = `${rect.bottom + 10}px`
            tooltipEl.style.transform = 'translateX(-50%)'
          }

          tooltipEl.classList.add('opacity-100')
        }

        const hideTooltip = () => {
          tooltipEl.classList.remove('opacity-100')
        }

        el._showTooltip = showTooltip
        el._hideTooltip = hideTooltip

        el.addEventListener('mouseenter', el._showTooltip)
        el.addEventListener('mouseleave', el._hideTooltip)
      },
      updated(el, binding) {
        if (el._tooltipEl) {
          el._tooltipEl.textContent = binding.value
        }
      },
      unmounted(el) {
        el.removeEventListener('mouseenter', el._showTooltip)
        el.removeEventListener('mouseleave', el._hideTooltip)
        if (el._tooltipEl) {
          el._tooltipEl.remove()
          delete el._tooltipEl
        }
      },
    })
  },
}
