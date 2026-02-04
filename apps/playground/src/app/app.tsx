import { defineComponent } from 'vue'

import { MButton } from '@murzex-vue/mvue'

export default defineComponent(() => {
	return () => (
		<>
			<MButton value='Submit' icons={[{ position: 'left', icon: 'account' }]} />
		</>
	)
})
