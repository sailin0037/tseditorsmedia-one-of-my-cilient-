# 🚀 Google Sheets Contact Form Setup Guide

## Step 1: Open Google Sheets
1. Go to your Google Sheet: https://docs.google.com/spreadsheets/d/1w4oqBrUXEGWyuzeW4Bsfc_pTRMKixt8GYKNirUYbmLA/edit

## Step 2: Create Google Apps Script
1. Click on **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste the code from `GoogleAppsScript.gs` in this project
4. Click the **Save** icon (or Ctrl+S)

## Step 3: Deploy as Web App
1. Click the blue **Deploy** button (top right)
2. Select **New deployment**
3. Click the **Gear icon** next to "Select type"
4. Choose **Web app**
5. Fill in:
   - **Description**: Contact Form
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
6. Click **Deploy**
7. Copy the **Web app URL** (starts with https://script.google.com/...)

## Step 4: Connect to Your Website
1. Open `src/pages/Contact.jsx` in your project
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your copied URL
4. Save and rebuild!

## Step 5: Test
1. Fill out the contact form on your website
2. Check your Google Sheet - the data should appear!

---

## 📋 What the Form Collects:
- Date/Time
- Name
- Email
- Phone
- Service Interest
- Budget Range
- Message

---

## ⚠️ Important Notes:
- The Google Sheet should have headers in row 1: Date, Name, Email, Phone, Service, Budget, Message
- Make sure to deploy again if you change the script
- Form also shows WhatsApp link if submission fails

---

## 🎉 You're Done!
Every time someone fills the contact form, their details will automatically be added to your Google Sheet!
