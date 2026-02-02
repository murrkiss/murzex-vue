import { defineComponent, h, SetupContext } from '@vue/runtime-core'

import { IconPropsTypes, IconEmitsTypes } from './types'

export default defineComponent(
	(props: IconPropsTypes, ctx: SetupContext<IconEmitsTypes>) => {
		return () =>
			h('svg', {
				...ctx.attrs,
			})
	},
	{
		props: ['icon'],
	},
)
