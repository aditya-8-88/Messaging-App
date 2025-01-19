# Real-Time Chat Application

## Project architecture

## Diagrams

---
## Setup

**Backend**
- Clone the repo and run below commands
```bash
cd Backend
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
pip install -r requirements.txt
python manage.py makemigrations     
python manage.py migrate
python manage.py runserver
```