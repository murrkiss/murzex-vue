import { SetupContext, VNodeChild, h } from '@vue/runtime-core'

import type { IconPropsTypes, IconEmitsTypes } from './types'

import { icons } from './icons'

export class IconService {
	constructor(
		public props: IconPropsTypes,
		public ctx: SetupContext<IconEmitsTypes>,
	) {}

	clsx = (): string[] => {
		const clsx: string[] = ['m-component-icon']

		return clsx
	}

	getIcon = (): VNodeChild => {
		return icons[this.props.icon].map((item, index) => h('path', { key: index, d: item }))
	}
}
