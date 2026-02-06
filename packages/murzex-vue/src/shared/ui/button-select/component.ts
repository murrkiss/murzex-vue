import { defineComponent, h, SetupContext } from '@vue/runtime-core'

import type { ButtonSelectPropsTypes, ButtonSelectEmitsTypes } from './types'

import { ButtonSelectService } from './service'

export default defineComponent((props: ButtonSelectPropsTypes, ctx: SetupContext<ButtonSelectEmitsTypes>) => {
	const useButtonSelectService = new ButtonSelectService(props, ctx)

	return () => h('div')
})
