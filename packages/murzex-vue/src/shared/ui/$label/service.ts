import { h, SetupContext, VNodeChild } from '@vue/runtime-core'

import type { LabelPropsTypes, LabelEmitsTypes, PositionType } from './types'

import { MIcon } from '../../../'

export class LabelService {
	constructor(
		public props: LabelPropsTypes,
		public ctx: SetupContext<LabelEmitsTypes>,
	) {}

	clsx = (): string[] => {
		const clsx: string[] = ['m-component-label']

		return clsx
	}

	getValue = (): VNodeChild => {
		if (!this.props.value) {
			return null
		}

		return h('span', { class: 'value' }, [this.props.value])
	}

	getIcon = (position: PositionType): VNodeChild => {
		if (!this.props.icons) {
			return null
		}

		return this.props.icons
			.filter(item => item.position === position)
			.map((item, index) => h(MIcon, { key: index, icon: item.icon }))
	}

	getLabel = (): VNodeChild => {
		return [
			this.getIcon('top'),
			h('div', { class: 'row' }, [
				this.getIcon('left'),
				this.getValue(),
				this.getIcon('right'),
			]),
			this.getIcon('bottom'),
		]
	}
}
