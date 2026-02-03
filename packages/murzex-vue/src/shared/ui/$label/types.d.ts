import { IconType } from '../icon/types'

export interface IconPostitionTypes {
	position: 'top' | 'left' | 'right' | 'bottom'
	icon: IconType
}

export interface LabelPropsTypes {
	label: string
	iocns: IconPostitionTypes
}

export interface LabelEmitsTypes {}
