import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
	state: () => ({
		isLnbOpen: true,
	}),
	getters: {

	},
	actions: {
		toggleLnb() {
			this.isLnbOpen = !this.isLnbOpen;
		},
	},
});