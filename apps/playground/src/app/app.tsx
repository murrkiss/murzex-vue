import { defineComponent } from 'vue'

import { MButton } from '@murzex-vue/mvue'

export default defineComponent(() => {
	return () => (
		<>
			<div class='flex flex-col gap-2'>
				<div class='flex flex-nowrap items-center gap-2'>
					<MButton
						value='Submit'
						icons={[{ position: 'left', icon: 'account' }]}
					/>
					<MButton
						value='Submit'
						severity='secondary'
						icons={[{ position: 'left', icon: 'account' }]}
					/>
					<MButton
						value='Submit'
						severity='success'
						icons={[{ position: 'left', icon: 'account' }]}
					/>
					<MButton
						value='Submit'
						severity='warning'
						icons={[{ position: 'left', icon: 'account' }]}
					/>
					<MButton
						value='Submit'
						severity='danger'
						icons={[{ position: 'left', icon: 'account' }]}
					/>
					<MButton
						value='Submit'
						severity='info'
						icons={[{ position: 'left', icon: 'account' }]}
					/>
					<MButton
						value='Submit'
						severity='help'
						icons={[{ position: 'left', icon: 'account' }]}
					/>
				</div>
			</div>
		</>
	)
})
