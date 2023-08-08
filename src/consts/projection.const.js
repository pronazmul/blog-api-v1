// Initialize Module
const ProjectionConst = {}

ProjectionConst.userAuth =
  'role name email username password avatar phone dob bio followers following address active'

ProjectionConst.user =
  'role name email username avatar phone dob bio followers following address active'
ProjectionConst.user_with_follower = 'name username avatar bio'

ProjectionConst.role = 'name permissions description active'
ProjectionConst.role_with_user = 'name'

ProjectionConst.follower = 'follower following active createdAt'

ProjectionConst.category = 'name image description createdAt'
ProjectionConst.subCateogry = 'category name image description createdAt'

ProjectionConst.tag = 'name blogCount createdAt'

// Blog Projections
ProjectionConst.blog =
  'user category subcategory tags title content image likesCount commentCount createdAt'
ProjectionConst.blog_user = 'name username avatar'
ProjectionConst.blog_category = 'name image'
ProjectionConst.blog_subCategory = 'name image'
ProjectionConst.blog_tags = 'name'

// Notification Projections
ProjectionConst.notification = 'user blog content type readStatus createdAt'
ProjectionConst.notification_blog = 'title image '

export default ProjectionConst
