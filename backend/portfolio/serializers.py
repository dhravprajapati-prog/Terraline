from rest_framework import serializers

from portfolio.models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "location",
            "project_type",
            "technology_used",
            "description",
            "completion_date",
            "image",
        ]
        read_only_fields = fields
