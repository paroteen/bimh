// Simple Express server to handle email API endpoint
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email API endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, interest, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer re_RQEzFzbr_PDq2Jfki2yEJ6gCKShH9BFXX`
      },
      body: JSON.stringify({
        from: 'BIMH LTD Contact Form <onboarding@resend.dev>',
        to: ['o.itangisha@gmail.com'],
        subject: 'New Website Inquiry - BIMH LTD',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #e08d26; border-bottom: 2px solid #e08d26; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Name:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Email:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Phone:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Interested In:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${interest || 'Not specified'}</td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd; vertical-align: top;">Message:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              This email was sent from the BIMH LTD website contact form.
            </p>
          </div>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ 
        error: data.message || 'Failed to send email' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      id: data.id,
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

