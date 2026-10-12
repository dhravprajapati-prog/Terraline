from rest_framework.routers import DefaultRouter

from portfolio.views import ProjectViewSet


router = DefaultRouter()
router.register("projects", ProjectViewSet, basename="project")

urlpatterns = router.urls
