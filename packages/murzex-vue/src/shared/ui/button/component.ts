import './tw.style.css'

import { defineComponent, h, SetupContext } from '@vue/runtime-core'

import type { ButtonPropsTypes, ButtonEmitsTypes } from './types'

import { ButtonService } from './service'

import { $MLabel } from '../../../'

export default defineComponent(
	(props: ButtonPropsTypes, ctx: SetupContext<ButtonEmitsTypes>) => {
		const useButtonService = new ButtonService(props, ctx)

		return () =>
			h(
				'button',
				{
					...ctx.attrs,
					class: useButtonService.clsx,
					onClick: useButtonService.handleClick,
				},
				[h($MLabel, { value: props.value, icons: props.icons })],
			)
	},
	{
		props: ['icons', 'value', 'severity', 'size', 'loading', 'disabled'],
		emits: ['click'],
	},
)
