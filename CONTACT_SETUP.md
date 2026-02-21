# Contact Form Setup - Google Forms Integration

## Option 1: Use Google Forms (Easiest - No Code)

### Step 1: Create Google Form
1. Go to: https://forms.google.com
2. Click **+** to create new form
3. Add these fields:
   - Name (Short answer)
   - Email (Email)
   - Phone (Short answer)
   - Service (Dropdown)
   - Budget (Dropdown)
   - Message (Paragraph)

### Step 2: Get Form Link
1. Click **Send** button
2. Copy the **Link** tab URL
3. It looks like: `https://docs.google.com/forms/d/e/.../viewform`

### Step 3: Update Website
1. Open `src/pages/Contact.jsx`
2. Find line with `GOOGLE_FORM_URL`
3. Replace with your Google Form URL

---

## Option 2: Keep Current Setup

The contact page now has 3 easy ways to contact:

1. **WhatsApp** - Direct chat (fastest!)
2. **Email** - Direct email
3. **Google Form** - Opens official form

---

## For Now - Test These Links:

**WhatsApp:** https://wa.me/917904396500

**Email:** tseditorsclub@gmail.com

**Google Form:** Create one from https://forms.google.com and update the link in Contact.jsx
