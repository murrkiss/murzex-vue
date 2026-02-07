import './tw.style.css'

import { defineComponent, h, SetupContext } from 'vue'

import type { ButtonSelectPropsTypes, ButtonSelectEmitsTypes } from './types'

import { ButtonSelectService } from './service'

export default defineComponent(
	(props: ButtonSelectPropsTypes, ctx: SetupContext<ButtonSelectEmitsTypes>) => {
		const useButtonSelectService = new ButtonSelectService(props, ctx)

		return () => h('div', { ...ctx.attrs, class: useButtonSelectService.clsx() }, [useButtonSelectService.getButtons()])
	},
	{
		props: ['buttons', 'severity', 'size', 'default', 'multiple', 'rounded'],
		emits: ['click'],
	},
)
