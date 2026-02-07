import './tw.style.css'

import { computed, defineComponent, h, provide, SetupContext } from 'vue'

import type { ButtonGroupPropsTypes, ButtonGroupEmitsTypes } from './types'

export default defineComponent(
	(props: ButtonGroupPropsTypes, ctx: SetupContext<ButtonGroupEmitsTypes>) => {
		provide('ButtonGroupProps', {
			size: computed(() => props.size),
			rounded: computed(() => props.rounded),
		})

		return () => {
			const defaultChildren = ctx.slots['default']

			return h('div', { ...ctx.attrs, class: 'm-component-button-group' }, defaultChildren ? defaultChildren() : [])
		}
	},
	{
		props: ['size', 'rounded'],
	},
)
