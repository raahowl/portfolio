import React from 'react'
import loadable from '@loadable/component'
const Home = loadable(() =>
	import(
		/* webpackChunkName: "home" */
		/* webpackPrefetch: true */
		'../components/Home'
	)
)
const Project = loadable(() =>
	import(
		/* webpackChunkName: "Project" */
		'../pages/Project'
	)
)
const ProjectList = loadable(() =>
	import(
		/* webpackChunkName: "ProjectList" */
		'../pages/ProjectList'
	)
)

const routes = [
	{
		path: '/portfolio-react',
		element: <Home />,
		exact: true,
	},
	{
		path: '/portfolio-react/projects',
		element: <ProjectList />,
	},
	{
		path: '/portfolio-react/projects/:project_id',
		element: <Project />,
	},
]

export default routes
