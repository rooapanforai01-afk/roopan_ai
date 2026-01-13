# 🔐 VESPERTINE Login System & Database Guide

## 📋 Complete Features

### 1. **User Registration & Login**
- **Register**: Create new account with name, email, password
- **Login**: Login with registered email and password
- **Data Storage**: All users stored in browser's localStorage (persistent database)

### 2. **Login Attempts Database**
Every login attempt (successful or failed) is recorded with:
- User email
- Status (Success/Failed)
- Date and time
- Full timestamp
- Device information

### 3. **View Login History**
- **Per User**: Click "View History" button next to any user to see their login attempts
- **Admin Dashboard**: Click "View Login History & Analytics" button to see:
  - Total registered users
  - Total login attempts
  - Successful logins count
  - Failed attempts count
  - Complete table of all login attempts
  - Export to CSV feature

### 4. **User Management**
- View all registered users in login.html
- See registration date and login attempt count for each user
- Delete user accounts if needed

---

## 🚀 How to Use

### **Step 1: Go to Login Page**
```
Click "Login" button in the top-right corner of index.html
Or directly open: login.html
```

### **Step 2: Register a New Account**
1. Click "Don't have an account? Register here"
2. Enter:
   - Full Name
   - Email Address
   - Password (min 6 characters)
   - Confirm Password
3. Click "Create Account"
4. You'll see the registered user in the user list below

### **Step 3: Login**
1. Enter your registered email
2. Enter your password
3. Click "Login"
4. You'll be redirected to home page (index.html) with your name shown in top-right corner

### **Step 4: View Login Attempts**
On login.html page, you have several options:

**Option A - View Individual User History:**
- Click "View History" button next to any user
- Opens a new window showing all login attempts for that user

**Option B - View Admin Dashboard:**
- Click "View Login History & Analytics" button
- Shows:
  - Statistics (total users, attempts, successful/failed)
  - Complete table of all login attempts
  - Option to export as CSV file

### **Step 5: Logout**
- Click your name in the top-right corner of index.html
- Click "Logout"
- You'll be logged out

---

## 💾 Data Storage Explained

Your data is stored in **Browser's localStorage**:
- **Users Database**: `vespertine_users`
- **Login Attempts**: `vespertine_login_attempts`

To view your data:
1. Open login.html
2. Press `F12` to open Developer Tools
3. Go to "Application" tab
4. Click "Local Storage"
5. Find your domain
6. You'll see all stored data

---

## 🔍 Example Login Attempts

When you login:
```json
{
  "email": "john@example.com",
  "status": "success",
  "timestamp": "1/13/2026, 2:30:45 PM",
  "date": "1/13/2026",
  "time": "2:30:45 PM",
  "device": "Mozilla/5.0..."
}
```

When login fails:
```json
{
  "email": "john@example.com",
  "status": "failed",
  "timestamp": "1/13/2026, 2:30:30 PM",
  "date": "1/13/2026",
  "time": "2:30:30 PM",
  "device": "Mozilla/5.0..."
}
```

---

## 📁 Files Structure

```
github_test1/
├── index.html          (Main website - shows Login button & logged-in user)
├── login.html          (NEW - Registration, Login, User Management & History)
├── styles.css          (All styling)
└── script.js           (Main interactivity)
```

---

## 🎯 Key Features Summary

✅ **Registration System** - Create new accounts with validation
✅ **Login System** - Secure login with password check
✅ **Persistent Database** - Data stored in localStorage
✅ **Login History** - Track all login attempts with timestamps
✅ **Admin Dashboard** - View analytics and statistics
✅ **User Management** - View, delete, and manage users
✅ **Export Feature** - Download login history as CSV
✅ **Session Management** - Logout functionality
✅ **User Display** - Shows logged-in user on website
✅ **Failed Attempt Tracking** - Records wrong password/email attempts

---

## 🔒 Security Notes

⚠️ **This is a demo system** using localStorage. For production:
- Use a proper backend database (MongoDB, PostgreSQL, etc.)
- Hash passwords with bcrypt
- Use secure authentication (JWT, OAuth2)
- Implement HTTPS
- Add rate limiting for login attempts
- Add CAPTCHA for failed attempts

---

## 🎨 Styling

All UI elements match the VESPERTINE premium brand:
- Luxury black (#1a1a1a)
- Gold accents (#d4af37)
- Clean white backgrounds
- Smooth animations
- Premium typography

---

## 💡 Test It Out!

1. **Register**:
   - Name: John Doe
   - Email: john@example.com
   - Password: 123456

2. **Try Failed Login**:
   - Use correct email but wrong password
   - Check login history - it will show as "failed"

3. **Successful Login**:
   - Use correct credentials
   - Get redirected to home page
   - See your name in top-right corner

4. **View History**:
   - Click "View History" for the user
   - See all your login attempts with timestamps

5. **Admin Dashboard**:
   - Click "View Login History & Analytics"
   - See statistics and export as CSV

---

**Enjoy your premium fashion website with secure login system! 🎉**
