import type { UserConfig } from 'vite'
import type { RollupAliasOptions } from '@rollup/plugin-alias'
import NormalSplitChunks from './plugins/NormalSplitChunks'

export default async (): Promise<UserConfig> => {
	return {
		// NOTE - If you want to use Regex please use /...\/([^/]+)/ to split chunks right way
		plugins: [NormalSplitChunks([/node_modules\/([^/]+)/])],
	}
}

export const aliasExternal: RollupAliasOptions = {
	entries: process.env.ESM
		? {
				vue: 'https://esm.sh/vue@3.2.45',
		  }
		: {},
}
