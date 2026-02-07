import { h, Ref, ref, SetupContext, VNodeChild } from 'vue'

import type { ButtonSelectPropsTypes, ButtonSelectEmitsTypes } from './types'

import $MLabel from '../$label/component'

export class ButtonSelectService {
	isActived: Ref<string[]>

	constructor(
		public props: ButtonSelectPropsTypes,
		public ctx: SetupContext<ButtonSelectEmitsTypes>,
	) {
		this.isActived = ref<string[]>(props.default ? [props.default] : [])
	}

	clsx = (): string[] => {
		const clsx = ['m-component-button-select']

		if (this.props.size) {
			clsx.push(`m-component-button-select-size-${this.props.size}`)
		}

		return clsx
	}

	getButtons = (): VNodeChild => {
		return this.props.buttons.map((item, index) => {
			const clsx = ['m-button-select-item']

			const handleClick = (): void => {
				if (item.disabled) {
					return
				}

				if (this.props.multiple) {
					const index = this.isActived.value.findIndex(e => e === item.key)

					if (index !== -1) {
						this.isActived.value = this.isActived.value.filter(e => e !== item.key)
					} else {
						this.isActived.value = [...this.isActived.value, item.key]
					}
				} else {
					if (this.isActived.value.includes(item.key)) {
						this.isActived.value = []
					} else {
						this.isActived.value = [item.key]
					}
				}

				this.ctx.emit('select', this.isActived.value)
			}

			return h(
				'button',
				{
					key: index,
					class: [...clsx, this.isActived.value.includes(item.key) ? 'm-button-select-item-active' : ''],
					onClick: handleClick,
					disabled: item.disabled,
				},
				[h($MLabel, { value: item.value, icons: item.icons })],
			)
		})
	}
}
