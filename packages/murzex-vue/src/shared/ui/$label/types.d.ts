import { IconType } from '../icon/types'

export type PositionType = 'top' | 'left' | 'right' | 'bottom'

export interface IconPositionTypes {
	position: PositionType
	icon: IconType
}

export interface LabelPropsTypes {
	value?: string
	icons?: IconPositionTypes[]
}

export interface LabelEmitsTypes {}
