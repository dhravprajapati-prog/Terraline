from django.db import models


class Project(models.Model):
    class ProjectType(models.TextChoices):
        HIGHWAY = "highway", "Highway"
        CANAL = "canal", "Canal"
        URBAN_ROAD = "urban_road", "Urban Road"
        PIPELINE = "pipeline", "Pipeline"

    title = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    project_type = models.CharField(
        max_length=20,
        choices=ProjectType.choices,
    )
    technology_used = models.TextField()
    description = models.TextField()
    completion_date = models.DateField()
    image = models.ImageField(upload_to="projects/", blank=True)

    class Meta:
        ordering = ["-completion_date", "title"]

    def __str__(self):
        return f"{self.title} ({self.location})"
