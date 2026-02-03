import './style.css'

import { defineComponent, h, SetupContext } from '@vue/runtime-core'

import type { LabelPropsTypes, LabelEmitsTypes } from './types'

import { LabelService } from './service'

export default defineComponent(
	(props: LabelPropsTypes, ctx: SetupContext<LabelEmitsTypes>) => {
		const useLabelService = new LabelService(props, ctx)

		return () =>
			h('span', {
				...ctx.attrs,
				class: useLabelService.clsx,
			})
	},
	{
		props: ['label', 'iocns'],
	},
)
