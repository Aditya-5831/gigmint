import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
} from "@react-email/components";

interface EmailMessageProps {
  email: string;
  otp: string;
  type: string;
}

const EmailMessage = ({ otp, email, type }: EmailMessageProps) => {
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "#f9fafb",
          fontFamily: "Helvetica, Arial, sans-serif",
          padding: "40px 0",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
          }}
        >
          {/* Gigmint Branding */}
          <Section style={{ textAlign: "center", marginBottom: "24px" }}>
            <Img
              src="https://yourdomain.com/logo.png"
              width="48"
              height="48"
              alt="Gigmint"
              style={{ margin: "0 auto" }}
            />
            <Text
              style={{
                fontSize: "20px",
                fontWeight: 600,
                marginTop: "8px",
                color: "#111827",
              }}
            >
              Gigmint
            </Text>
          </Section>

          <Text
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            Hi {email},
          </Text>

          <Text
            style={{ fontSize: "16px", color: "#374151", marginBottom: "24px" }}
          >
            We received a request to {type}. Use the one-time password (OTP)
            below to complete the process.
          </Text>

          <Section
            style={{
              backgroundColor: "#f3f4f6",
              padding: "16px 24px",
              borderRadius: "8px",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            <Text
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#4f46e5",
                letterSpacing: "6px",
              }}
            >
              {otp}
            </Text>
          </Section>

          <Text
            style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px" }}
          >
            This OTP is valid for 5 minutes. Please don’t share this code with
            anyone.
          </Text>
          <Text style={{ fontSize: "14px", color: "#6b7280" }}>
            If you didn’t request this, you can safely ignore this email.
          </Text>

          <Section
            style={{
              marginTop: "32px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "16px",
              textAlign: "center",
            }}
          >
            <Text style={{ fontSize: "12px", color: "#9ca3af" }}>
              © 2025 Gigmint. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailMessage;
