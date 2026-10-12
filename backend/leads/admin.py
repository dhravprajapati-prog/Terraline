from django.contrib import admin

from leads.models import Lead


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = [
        "contact_name",
        "company",
        "email",
        "project_type",
        "location",
        "created_at",
    ]
    list_filter = ["project_type", "created_at"]
    search_fields = ["contact_name", "company", "email", "phone", "location"]
    readonly_fields = ["created_at"]
