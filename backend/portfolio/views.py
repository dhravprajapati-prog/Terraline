from rest_framework import filters, viewsets

from portfolio.models import Project
from portfolio.serializers import ProjectSerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["title", "location", "project_type", "technology_used"]
    ordering_fields = ["completion_date", "title"]
