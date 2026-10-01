from pydantic import BaseModel

# What the user sends to create a product (no ID yet)
class ProductCreate(BaseModel):
    name: str
    sku: str
    stock_quantity: int = 0
    unit_price: float

# What the API returns (includes the database-generated ID)
class ProductResponse(ProductCreate):
    id: int

    class Config:
        from_attributes = True
        