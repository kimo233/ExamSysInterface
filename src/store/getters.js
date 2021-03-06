const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles,
  grade: state => state.user.grade,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  type: state => state.user.type,
  lec: state => state.user.lec,
  id: state => state.user.id
}
export default getters
