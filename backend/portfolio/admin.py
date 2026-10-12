from django.contrib import admin

from portfolio.models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["title", "location", "project_type", "completion_date"]
    list_filter = ["project_type", "completion_date"]
    search_fields = ["title", "location", "technology_used"]
