export const ROUTER_BASE_PATH = '/'
export const ROUTER_HOME_NAME = 'HomePage'
export const ROUTER_HOME_PATH = '/'
export const ROUTER_CONTENT_NAME = 'ContentPage'
export const ROUTER_CONTENT_PATH = '/:title?-:id(\\d+)?'
export const ROUTER_CONTENT_COMMENT_NAME = 'ContentComment'
export const ROUTER_CONTENT_COMMENT_PATH = 'comment'
export const ROUTER_COMMENT_NAME = 'CommentPage'
export const ROUTER_COMMENT_PATH = 'comment/detail'
export const ROUTER_LOGIN_NAME = 'LoginPage'
export const ROUTER_LOGIN_PATH = '/login'
export const ROUTER_NOT_FOUND_NAME = 'NotFoundPage'
export const ROUTER_NOT_FOUND_PATH = '/:pathMatch(.*)*'
export const TEST_TEST_TEST = { name: 'trường' }
export const ENV_VARIABLE_EXPORTER_FOR_AUTO_IMPORT = {
	'@/config/env/ENV.js': [
		'ROUTER_BASE_PATH',
		'ROUTER_HOME_NAME',
		'ROUTER_HOME_PATH',
		'ROUTER_CONTENT_NAME',
		'ROUTER_CONTENT_PATH',
		'ROUTER_CONTENT_COMMENT_NAME',
		'ROUTER_CONTENT_COMMENT_PATH',
		'ROUTER_COMMENT_NAME',
		'ROUTER_COMMENT_PATH',
		'ROUTER_LOGIN_NAME',
		'ROUTER_LOGIN_PATH',
		'ROUTER_NOT_FOUND_NAME',
		'ROUTER_NOT_FOUND_PATH',
		'TEST_TEST_TEST',
	],
}
