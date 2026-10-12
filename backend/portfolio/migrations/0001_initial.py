from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Project",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("location", models.CharField(max_length=200)),
                (
                    "project_type",
                    models.CharField(
                        choices=[
                            ("highway", "Highway"),
                            ("canal", "Canal"),
                            ("urban_road", "Urban Road"),
                            ("pipeline", "Pipeline"),
                        ],
                        max_length=20,
                    ),
                ),
                ("technology_used", models.TextField()),
                ("description", models.TextField()),
                ("completion_date", models.DateField()),
                (
                    "image",
                    models.ImageField(
                        blank=True,
                        upload_to="projects/",
                    ),
                ),
            ],
            options={"ordering": ["-completion_date", "title"]},
        ),
    ]
