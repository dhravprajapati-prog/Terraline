# Terraline Infra API

Django REST API for the Terraline Infra project portfolio and quote requests.
The API uses PostgreSQL and serves the React development origin on port 5173.

## Local setup

1. Create and activate a Python 3.12+ virtual environment.
2. From this directory, install dependencies:

   ```powershell
   pip install -r requirements.txt
   ```

3. Copy `.env.example` to `.env` and set the PostgreSQL connection values.
   Django loads this file automatically for local development.
4. Create the PostgreSQL database and matching role, then run:

   ```powershell
   python manage.py migrate
   python manage.py createsuperuser
   python manage.py runserver
   ```

The API is available at `http://127.0.0.1:8000/api/`. Add and manage portfolio
projects and review incoming leads at `http://127.0.0.1:8000/admin/`.

## Endpoints

- `GET /api/projects/` — paginated project list; supports `?search=` and
  `?ordering=completion_date` (prefix with `-` for descending order).
- `GET /api/projects/{id}/` — project detail.
- `POST /api/leads/` — submit a quote request as JSON:

  ```json
  {
    "contact_name": "Avery Patel",
    "company": "Example Infrastructure Ltd.",
    "email": "avery@example.com",
    "phone": "+91 98765 43210",
    "location": "Sanand, Gujarat",
    "project_type": "highway",
    "scale": "12 km",
    "services": ["Drone", "GPS", "Topographic"]
  }
  ```

Project types are `highway`, `canal`, `urban_road`, and `pipeline`. Lead
submissions are validated by the API and return `201 Created` when accepted.
