import { defineComponent, h, SetupContext } from '@vue/runtime-core'

import { ButtonService } from './service'

import type { ButtonPropsTypes, ButtonEmitsTypes } from './types'

export default defineComponent(
	(props: ButtonPropsTypes, ctx: SetupContext<ButtonEmitsTypes>) => {
		const useButtonService = new ButtonService(props, ctx)

		return () => h('button')
	},
	{
		props: ['label'],
		emits: ['click'],
	},
)
