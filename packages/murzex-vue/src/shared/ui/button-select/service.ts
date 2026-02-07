import { h, ref, SetupContext, VNodeChild } from 'vue'

import type { ButtonSelectPropsTypes, ButtonSelectEmitsTypes } from './types'

import $MLabel from '../$label/component'

export class ButtonSelectService {
	constructor(
		public props: ButtonSelectPropsTypes,
		public ctx: SetupContext<ButtonSelectEmitsTypes>,
	) {}

	isActived = ref<string[]>([])

	clsx = (): string[] => {
		const clsx = ['m-component-button-select']

		return clsx
	}

	getButtons = (): VNodeChild => {
		return this.props.buttons.map((item, index) => {
			const clsx = ['m-button-select-item']

			const handleClick = (): void | null => {
				if (this.props.multiple) {
					if (this.isActived.value.includes(item.key)) {
						this.isActived.value.splice(
							this.isActived.value.findIndex(e => e === item.key),
							1,
						)

						return null
					}

					this.isActived.value.push(item.key)

					return null
				}

				if (this.isActived.value.includes(item.key)) {
					this.isActived.value = []

					return null
				}

				this.isActived.value = []
				this.isActived.value.push(item.key)
			}

			return h(
				'button',
				{ key: index, class: [...clsx, this.isActived.value.includes(item.key) ? 'm-button-select-item-active' : ''], onClick: handleClick },
				[h($MLabel, { value: item.value, icons: item.icons })],
			)
		})
	}
}
