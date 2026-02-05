import './tw.style.css'

import { computed, ComputedRef, defineComponent, h, inject, SetupContext } from '@vue/runtime-core'

import type { ButtonPropsTypes, ButtonEmitsTypes, ButtonGroupComputedContextTypes } from './types'

import { ButtonService } from './service'

import { $MLabel } from '../../../'

export default defineComponent(
	(props: ButtonPropsTypes, ctx: SetupContext<ButtonEmitsTypes>) => {
		const useButtonService = new ButtonService(props, ctx)

		const useButtonGroupPropsInject = inject<ButtonGroupComputedContextTypes | null>('ButtonGroupProps', null)

		const buttonGroupComputedContext: ComputedRef<ButtonGroupComputedContextTypes | undefined> = computed(() => {
			if (!useButtonGroupPropsInject) {
				return undefined
			}

			return useButtonGroupPropsInject
		})

		return () =>
			h(
				'button',
				{
					...ctx.attrs,
					class: useButtonService.clsx(buttonGroupComputedContext.value),
					onClick: useButtonService.handleClick,
					disabled: props.disabled || props.loading,
				},
				[
					h($MLabel, {
						value: useButtonService.getValue(),
						icons: props.icons,
					}),
				],
			)
	},
	{
		props: ['icons', 'value', 'severity', 'variant', 'size', 'rounded', 'loading', 'loadingText', 'disabled'],
		emits: ['click'],
	},
)
