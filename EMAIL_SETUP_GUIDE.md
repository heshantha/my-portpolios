# Contact Form Email Setup Guide

The contact form is now configured to send emails to **heshantha.l@gmail.com**.

## Setup Instructions

To enable email sending functionality, you need to configure Gmail App Password:

### Step 1: Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification**
3. Follow the steps to enable 2-Step Verification

### Step 2: Generate App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Select app: **Mail**
3. Select device: **Other (Custom name)** → Type "Portfolio Contact Form"
4. Click **Generate**
5. Copy the 16-character password (remove spaces)

### Step 3: Configure Environment Variables

Create a file named `.env.local` in the root directory with the following content:

```env
EMAIL_USER=heshantha.l@gmail.com
EMAIL_PASSWORD=your_16_character_app_password_here
```

**Important:** Never commit the `.env.local` file to version control! It's already in `.gitignore`.

## Testing the Contact Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section on your portfolio

3. Fill out the form and submit

4. Check your email at heshantha.l@gmail.com for the message

## Features Implemented

✅ Form validation (all fields required)
✅ Loading state during submission
✅ Success/error messages
✅ Form reset after successful submission
✅ Beautiful HTML email template
✅ Reply-to header set to sender's email
✅ Disabled form fields during submission

## Troubleshooting

**Issue:** "Failed to send email"
- **Solution:** Verify your App Password is correct in `.env.local`
- Make sure 2-Step Verification is enabled
- Check that there are no extra spaces in the password

**Issue:** Email not received
- **Solution:** Check your spam/junk folder
- Verify the EMAIL_USER in `.env.local` matches your Gmail address

**Issue:** Form validation errors
- **Solution:** Ensure all fields are filled before submitting

## Alternative Email Services

If you prefer to use a different email service:

1. **SendGrid** (recommended for production)
2. **AWS SES**
3. **Mailgun**
4. **Resend**

Update the transporter configuration in `app/api/contact/route.ts` accordingly.

