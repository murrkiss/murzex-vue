import { ComputedRef } from 'vue'

import { LabelPropsTypes } from '../$label/types'

export type ButtonSizeType = 'small' | 'large'

export interface ButtonPropsTypes extends LabelPropsTypes {
	key: string
	disabled?: boolean
}

export interface ButtonSelectPropsTypes {
	buttons: ButtonPropsTypes[]
	size?: ButtonSizeType
	default?: string
	multiple?: boolean
	rounded?: boolean
}

export interface ButtonSelectEmitsTypes {
	select: (event: string[]) => void
}
