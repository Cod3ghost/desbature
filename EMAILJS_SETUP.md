# EmailJS Setup Guide

This guide will help you configure the contact form to work with EmailJS.

## Steps to Set Up EmailJS

### 1. Create an EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account

### 2. Add an Email Service
- Go to the "Email Services" tab
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the instructions to connect your email
- Note down your **Service ID**

### 3. Create an Email Template
- Go to the "Email Templates" tab
- Click "Create New Template"
- Use the following template variables:
  - `{{user_name}}` - Sender's name
  - `{{user_email}}` - Sender's email
  - `{{message}}` - The message content

Example template:
```
Subject: New Contact Form Message from {{user_name}}

You have received a new message from your portfolio website:

Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}
```

- Save the template and note down your **Template ID**

### 4. Get Your Public Key
- Go to "Account" > "General"
- Find your **Public Key** (also called User ID)

### 5. Update script.js
Open `script.js` and replace the placeholders with your actual IDs:

**Line 514:** Replace `YOUR_PUBLIC_KEY` with your Public Key
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

**Line 541:** Replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID`
```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
```

### 6. Test Your Form
- Open your website
- Fill out the contact form
- Submit and check if you receive an email

## Troubleshooting

- **No email received:** Check your spam/junk folder
- **Error message:** Verify all IDs are correct in script.js
- **Form not submitting:** Check browser console for errors
- **Free tier limit:** EmailJS free plan allows 200 emails/month

## Example Configuration

```javascript
// Example (replace with your actual IDs)
emailjs.init('user_1A2B3C4D5E6F7G8H9I');
emailjs.sendForm('service_gmail', 'template_contact_form', this)
```

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
