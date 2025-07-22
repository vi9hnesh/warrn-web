import { Metadata } from "next";
import { HeroHeader } from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Privacy Policy - Warrn Data Protection & Privacy",
  description: "Learn how Warrn protects your privacy and data in our AI-powered incident management platform. GDPR and CCPA compliant privacy practices for enterprise security.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "CCPA compliance",
    "data privacy",
    "security privacy",
    "incident data protection"
  ],
  canonicalUrl: `${SITE_CONFIG.url}/privacy`,
  type: 'website'
});

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeroHeader />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 border-b pb-6">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: July 21, 2025</p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Emphoni Inc. ("Emphoni," "we," "us," or "our") is committed to protecting your privacy and personal 
                  information. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you use our AI-powered incident management platform and related services 
                  (collectively, the "Service").
                </p>
                <p>
                  By using our Service, you consent to the data practices described in this Privacy Policy. 
                  If you do not agree with our policies and practices, please do not use our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                
                <h3 className="text-lg font-medium mb-2">2.1 Personal Information</h3>
                <p className="mb-4">We may collect the following types of personal information:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Account Information:</strong> Name, email address, phone number, job title, company name</li>
                  <li><strong>Authentication Data:</strong> Passwords, security tokens, and multi-factor authentication codes</li>
                  <li><strong>Profile Information:</strong> User preferences, timezone, notification settings</li>
                  <li><strong>Billing Information:</strong> Payment details, billing addresses (processed by third-party providers)</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">2.2 Technical Data</h3>
                <p className="mb-4">We automatically collect technical information including:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>System Monitoring Data:</strong> Incident alerts, system metrics, log files, performance data</li>
                  <li><strong>Usage Data:</strong> Feature usage, session duration, click patterns, navigation paths</li>
                  <li><strong>Device Information:</strong> IP addresses, browser type, operating system, device identifiers</li>
                  <li><strong>Integration Data:</strong> Data from connected third-party tools and services</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">2.3 AI Training Data</h3>
                <p>
                  Our AI systems analyze incident patterns and system behavior to improve automated responses. 
                  This analysis is performed on aggregated, anonymized data that cannot identify specific 
                  individuals or organizations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                
                <h3 className="text-lg font-medium mb-2">3.1 Service Provision</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Provide, operate, and maintain the incident management platform</li>
                  <li>Process and respond to system incidents and alerts</li>
                  <li>Enable AI-powered triage and automated response workflows</li>
                  <li>Facilitate team collaboration and communication</li>
                  <li>Generate analytics and reporting capabilities</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">3.2 Service Improvement</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Analyze usage patterns to improve platform performance</li>
                  <li>Train and improve AI models for better incident detection</li>
                  <li>Develop new features and functionality</li>
                  <li>Conduct security monitoring and threat detection</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">3.3 Communication</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Send incident notifications and system alerts</li>
                  <li>Provide customer support and technical assistance</li>
                  <li>Send important service updates and security notices</li>
                  <li>Share product updates and educational content (with consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
                
                <h3 className="text-lg font-medium mb-2">4.1 With Your Consent</h3>
                <p className="mb-4">
                  We may share your information with third parties when you provide explicit consent, 
                  such as integrating with external monitoring tools or services.
                </p>

                <h3 className="text-lg font-medium mb-2">4.2 Service Providers</h3>
                <p className="mb-4">
                  We work with trusted third-party service providers who assist in operating our Service:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Cloud infrastructure providers (AWS, Google Cloud, Azure)</li>
                  <li>Payment processors and billing services</li>
                  <li>Email and communication services</li>
                  <li>Analytics and monitoring tools</li>
                  <li>Customer support platforms</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">4.3 Legal Requirements</h3>
                <p className="mb-4">
                  We may disclose your information when required by law, legal process, or to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Comply with court orders, subpoenas, or legal obligations</li>
                  <li>Protect our rights, property, or safety</li>
                  <li>Investigate potential violations of our Terms of Service</li>
                  <li>Prevent fraud or other illegal activities</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">4.4 Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be 
                  transferred as part of the business transaction, subject to appropriate confidentiality protections.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                
                <h3 className="text-lg font-medium mb-2">5.1 Security Measures</h3>
                <p className="mb-4">We implement comprehensive security measures including:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit</li>
                  <li><strong>Access Controls:</strong> Role-based access with principle of least privilege</li>
                  <li><strong>Authentication:</strong> Multi-factor authentication and SSO integration</li>
                  <li><strong>Network Security:</strong> Firewalls, intrusion detection, and DDoS protection</li>
                  <li><strong>Monitoring:</strong> 24/7 security monitoring and incident response</li>
                  <li><strong>Regular Audits:</strong> Third-party security assessments and penetration testing</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">5.2 Compliance Certifications</h3>
                <p className="mb-4">
                  We maintain various security certifications and compliance frameworks:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>SOC 2 Type II certification</li>
                  <li>ISO 27001 compliance (in progress)</li>
                  <li>GDPR compliance for EU data protection</li>
                  <li>CCPA compliance for California residents</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">5.3 Data Breach Response</h3>
                <p>
                  In the unlikely event of a data breach, we will notify affected users and relevant 
                  authorities as required by applicable laws, typically within 72 hours of discovery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                
                <h3 className="text-lg font-medium mb-2">6.1 Retention Periods</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Account Data:</strong> Retained while your account is active plus 90 days after termination</li>
                  <li><strong>Incident Data:</strong> Retained for up to 3 years for analytics and pattern recognition</li>
                  <li><strong>Log Data:</strong> Retained for 90 days for security and troubleshooting purposes</li>
                  <li><strong>Billing Records:</strong> Retained for 7 years for tax and accounting requirements</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">6.2 Data Deletion</h3>
                <p>
                  Upon account termination or upon request, we will delete or anonymize your personal data 
                  in accordance with our data retention schedule and applicable legal requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Your Privacy Rights</h2>
                
                <h3 className="text-lg font-medium mb-2">7.1 General Rights</h3>
                <p className="mb-4">Depending on your jurisdiction, you may have the following rights:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Access:</strong> Request information about how we process your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete personal data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data under certain circumstances</li>
                  <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Restriction:</strong> Limit how we process your personal data</li>
                  <li><strong>Objection:</strong> Object to certain types of processing</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">7.2 GDPR Rights (EU Residents)</h3>
                <p className="mb-4">
                  If you are located in the European Union, you have additional rights under the 
                  General Data Protection Regulation (GDPR), including the right to lodge a complaint 
                  with your local data protection authority.
                </p>

                <h3 className="text-lg font-medium mb-2">7.3 CCPA Rights (California Residents)</h3>
                <p className="mb-4">
                  If you are a California resident, you have specific rights under the California 
                  Consumer Privacy Act (CCPA), including the right to know what personal information 
                  we collect and how it's used, and the right to opt-out of the sale of personal information.
                </p>

                <h3 className="text-lg font-medium mb-2">7.4 Exercising Your Rights</h3>
                <p>
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:privacy@emphoni.com" className="text-primary hover:underline">
                    privacy@emphoni.com
                  </a>. 
                  We will respond to your request within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
                <p className="mb-4">
                  Your information may be transferred to and processed in countries other than your 
                  country of residence. We ensure appropriate safeguards are in place for international 
                  transfers, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Standard Contractual Clauses (SCCs) for EU data transfers</li>
                  <li>Privacy Shield framework compliance (where applicable)</li>
                  <li>Adequacy decisions by relevant data protection authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Cookies and Tracking Technologies</h2>
                
                <h3 className="text-lg font-medium mb-2">9.1 Types of Cookies</h3>
                <p className="mb-4">We use the following types of cookies and similar technologies:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how users interact with our Service</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Analytics Cookies:</strong> Provide insights into usage patterns and performance</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">9.2 Cookie Management</h3>
                <p>
                  You can control cookies through your browser settings. However, disabling certain 
                  cookies may limit the functionality of our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
                <p>
                  Our Service is not intended for children under 16 years of age. We do not knowingly 
                  collect personal information from children under 16. If we become aware that we have 
                  collected such information, we will take steps to delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  material changes by posting the new Privacy Policy on this page and updating the 
                  "Last Updated" date. For significant changes, we may also notify you via email 
                  or through the Service.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed 
                  about how we protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
                <p className="mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, 
                  please contact us at:{" "}
                  <a href="mailto:privacy@emphoni.com" className="text-primary hover:underline">
                    privacy@emphoni.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 