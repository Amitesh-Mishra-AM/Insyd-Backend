# Inventory Control – Backend

This repository contains the **backend API** for the Inventory Control system.  
It provides REST endpoints for managing inventory items, stock updates, and threshold-based alerts.

---

## 🌐 Live Links

- **Base URL:** https://insyd-backend-3gfc.onrender.com/
- **Frontend Link:** https://insyd-frontend-wine.vercel.app/
- **Backend Repo(This Repo):** https://github.com/Amitesh-Mishra-AM/Insyd-Backend
- **Frontend Repo:** https://github.com/Amitesh-Mishra-AM/insyd_frontend
---

## 🧱 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Deployment:** Render

---

## 📌 Core Features

- Create inventory items
- Fetch all inventory items
- Stock in / stock out operations
- Update low-stock threshold
- Delete inventory items
- Input validation and error handling

---

## 📁 Project Structure
```
inventory-backend/
├── src/
│ ├── controllers/
│ │ └── itemController.js
│ ├── models/
│ │ └── Item.js
│ ├── routes/
│ │ └── itemRoutes.js
│ ├── app.js
│ └── server.js
├── .env
└── package.json
```
---
## 🔌 Environment Variables

Create a `.env` file in the root directory:

``` bash
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
```
## ▶️ Running Locally

```bash
npm install
npm run dev
```
API will be available at:
``` bash
http://localhost:5000/api
```
---
## API Endpoints
### Get all items
```
GET /items
```
### Add new item
```
POST /items
```

### Stock in
```
POST /items/:id/stock-in
```
### Stock out
```
POST /items/:id/stock-out
```
### Update threshold
```
PUT /items/:id/threshold
```
### Delete item
```
DELETE /items/:id
```
## 🛡 Validation & Safety

- All numeric inputs are validated server-side

- Backend does not trust client input

- Quantity and threshold updates are sanitized

- Errors return clear HTTP status codes

## 🧠 Design Decisions

- REST API for simplicity and clarity

- Controllers separated from routes

- MongoDB chosen for schema flexibility

- Defensive validation to prevent data corruption

## 📌 Possible Improvements

- Authentication and authorization

- Rate limiting

- Audit logs for inventory changes

- Soft delete instead of hard delete

---
---