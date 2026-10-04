# Global Samaax Food Ventures

Website for Global Samaax Food Ventures, a Lagos-based maker of healthy, natural foods and drinks (tiger nut drinks and more).

- **Frontend:** React + Vite + Tailwind CSS v4 (`frontend/`)
- **Backend:** FastAPI + SQLite (`backend/`)

## Requirements

- Node.js **22.12+** (or 24 LTS)
- Python 3.12+

## Running locally

Run the backend and frontend in two terminals.

**Backend** (http://localhost:8000, API docs at http://localhost:8000/docs):

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate        # macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend** (http://localhost:5173):

```bash
cd frontend
npm install
npm run dev
```

In development, Vite forwards `/api/*` requests to the backend.

## API

| Method | Path            | Description                          |
| ------ | --------------- | ------------------------------------ |
| GET    | `/api/health`   | Health check                         |
| GET    | `/api/products` | Product catalogue                    |
| POST   | `/api/contact`  | Save a contact/order enquiry (SQLite) |

## Editing content

- Business details (phone, WhatsApp, email, socials): `frontend/src/data/site.js`
- Products and prices: `backend/app/data.py` (mirror changes in `fallbackProducts` in `site.js`)
