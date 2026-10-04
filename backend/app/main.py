from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

from .data import PRODUCTS
from .db import get_conn, init_db


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(title="Global Samaax Food Ventures API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Product(BaseModel):
    id: int
    name: str
    description: str
    size: str
    price: float | None
    tag: str | None


class ContactIn(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    phone: str = Field(default="", max_length=30)
    message: str = Field(min_length=1, max_length=2000)


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.get("/api/products", response_model=list[Product])
def list_products():
    return PRODUCTS


@app.post("/api/contact", status_code=201)
def create_message(body: ContactIn):
    with get_conn() as conn:
        cur = conn.execute(
            "INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)",
            (body.name, body.email, body.phone, body.message),
        )
    return {"id": cur.lastrowid, "ok": True}
