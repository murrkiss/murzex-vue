import './tw.style.css'

import { computed, defineComponent, h, provide, SetupContext, VNodeChild } from '@vue/runtime-core'

import type { ButtonGroupPropsTypes, ButtonGroupEmitsTypes } from './types'

export default defineComponent(
	(props: ButtonGroupPropsTypes, ctx: SetupContext<ButtonGroupEmitsTypes>) => {
		let defaultSlot: VNodeChild = []

		if (ctx.slots['default']) {
			defaultSlot = ctx.slots['default']()
		}

		provide('ButtonGroupProps', {
			size: computed(() => props.size),
			rounded: computed(() => props.rounded),
		})

		return () => h('div', { ...ctx.attrs, class: 'm-component-button-group' }, defaultSlot)
	},
	{
		props: ['size', 'rounded'],
	},
)
