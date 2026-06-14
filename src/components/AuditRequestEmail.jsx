export function AuditRequestEmail({
  fullName,
  email,
  jobTitle,
  companyName,
  serviceInterest,
  contactMethod,
  contactHandle,
  additionalInfo,
}) {
  const submittedAt = new Date().toUTCString();

  return (
    <div style={{ backgroundColor: "#ffffff", padding: "20px 0" }}>
      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          backgroundColor: "#ffffff",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          overflow: "hidden",
          fontFamily: "'Segoe UI', Arial, sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ backgroundColor: "#2991C0", padding: "28px 40px" }}>
          <h1
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.3px",
            }}
          >
            New Audit Request
          </h1>
          <p style={{ margin: "6px 0 0", color: "#cceaf6", fontSize: "13px" }}>
            Submitted via Contact Form &bull; {submittedAt}
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: "32px 40px", backgroundColor: "#ffffff" }}>
          {/* Contact Information */}
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#2991C0",
              margin: "0 0 16px",
            }}
          >
            Contact Information
          </p>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid #f0f0f0",
                    width: "40%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "3px",
                    }}
                  >
                    Full Name
                  </div>
                  <div
                    style={{ fontSize: "15px", color: "#111", fontWeight: 500 }}
                  >
                    {fullName}
                  </div>
                </td>
                <td
                  style={{
                    padding: "10px 0 10px 24px",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "3px",
                    }}
                  >
                    Email Address
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#2991C0",
                      fontWeight: 500,
                    }}
                  >
                    <a
                      href={`mailto:${email}`}
                      style={{ color: "#2991C0", textDecoration: "none" }}
                    >
                      {email}
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "3px",
                    }}
                  >
                    Job Title
                  </div>
                  <div
                    style={{ fontSize: "15px", color: "#111", fontWeight: 500 }}
                  >
                    {jobTitle}
                  </div>
                </td>
                <td
                  style={{
                    padding: "10px 0 10px 24px",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "3px",
                    }}
                  >
                    Company
                  </div>
                  <div
                    style={{ fontSize: "15px", color: "#111", fontWeight: 500 }}
                  >
                    {companyName}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Request Details */}
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#2991C0",
              margin: "28px 0 16px",
            }}
          >
            Request Details
          </p>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid #f0f0f0",
                    width: "40%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "3px",
                    }}
                  >
                    Service Interest
                  </div>
                  <div
                    style={{ fontSize: "15px", color: "#111", fontWeight: 500 }}
                  >
                    {serviceInterest}
                  </div>
                </td>
                <td
                  style={{
                    padding: "10px 0 10px 24px",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "3px",
                    }}
                  >
                    Preferred Contact
                  </div>
                  <div
                    style={{ fontSize: "15px", color: "#111", fontWeight: 500 }}
                  >
                    {contactMethod} — {contactHandle}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Additional Info */}
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#2991C0",
              margin: "28px 0 12px",
            }}
          >
            Additional Information
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            {additionalInfo}
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#f8f8f8",
            borderTop: "1px solid #e0e0e0",
            padding: "16px 40px",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>
            This email was automatically generated from your website contact
            form.
          </p>
        </div>
      </div>
    </div>
  );
}
