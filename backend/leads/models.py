from django.db import models

from portfolio.models import Project


class Lead(models.Model):
    contact_name = models.CharField(max_length=150)
    company = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    location = models.CharField(max_length=200)
    project_type = models.CharField(
        max_length=20,
        choices=Project.ProjectType.choices,
    )
    scale = models.CharField(
        max_length=100,
        help_text="Project size, including its unit (for example, 12 km or 4 acres).",
    )
    services = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.contact_name} - {self.company}"
