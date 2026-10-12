from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("portfolio", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Lead",
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
                ("contact_name", models.CharField(max_length=150)),
                ("company", models.CharField(max_length=200)),
                ("email", models.EmailField(max_length=254)),
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
                (
                    "scale",
                    models.CharField(
                        help_text=(
                            "Project size, including its unit (for example, "
                            "12 km or 4 acres)."
                        ),
                        max_length=100,
                    ),
                ),
                ("services", models.JSONField(default=list)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
            ],
            options={"ordering": ["-created_at"]},
        ),
    ]
