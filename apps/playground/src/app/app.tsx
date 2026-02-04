import { defineComponent } from 'vue'

import { MButton } from '@murzex-vue/mvue'

export default defineComponent(() => {
	return () => (
		<>
			<MButton value='Submit' variant='outlined' />
			<MButton value='Submit' severity='secondary' variant='outlined' />
			<MButton value='Submit' severity='success' variant='outlined' />
			<MButton value='Submit' severity='warning' variant='outlined' />
			<MButton value='Submit' severity='danger' variant='outlined' />
			<MButton value='Submit' severity='help' variant='outlined' />
			<MButton value='Submit' severity='info' variant='outlined' />
		</>
	)
})
