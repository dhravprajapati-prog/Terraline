from rest_framework import serializers

from leads.models import Lead


class LeadSerializer(serializers.ModelSerializer):
    services = serializers.ListField(
        child=serializers.CharField(max_length=100),
        allow_empty=False,
    )

    class Meta:
        model = Lead
        fields = [
            "id",
            "contact_name",
            "company",
            "email",
            "phone",
            "location",
            "project_type",
            "scale",
            "services",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]
