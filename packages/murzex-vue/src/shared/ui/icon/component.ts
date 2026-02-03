import { defineComponent, h, SetupContext } from '@vue/runtime-core'

import { IconPropsTypes, IconEmitsTypes } from './types'

import { icons } from './icons'

export default defineComponent(
	(props: IconPropsTypes, ctx: SetupContext<IconEmitsTypes>) => {
		return () =>
			h(
				'svg',
				{
					...ctx.attrs,
					class: 'm-component-icon',
					width: '24',
					height: '24',
					viewBox: '0 0 24 24',
					fill: 'none',
					xmlns: 'http://www.w3.org/2000/svg',
				},
				[
					...icons[props.icon].map((item, index) =>
						h('path', {
							key: index,
							d: item,
						}),
					),
				],
			)
	},
	{
		props: ['icon'],
	},
)
