import { defineComponent, h, SetupContext } from '@vue/runtime-core'

import { IconPropsTypes, IconEmitsTypes } from './types'

import { IconService } from './service'

export default defineComponent(
	(props: IconPropsTypes, ctx: SetupContext<IconEmitsTypes>) => {
		const useIconService = new IconService(props, ctx)

		return () =>
			h(
				'svg',
				{
					...ctx.attrs,
					class: useIconService.clsx,
					width: '24',
					height: '24',
					viewBox: '0 0 24 24',
					fill: 'none',
					xmlns: 'http://www.w3.org/2000/svg',
				},
				[...useIconService.getIcon()],
			)
	},
	{
		props: ['icon'],
	},
)
