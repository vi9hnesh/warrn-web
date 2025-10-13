import { Metadata } from "next";
import { HeroHeader } from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Terms of Service - Warrn Incident Management Platform",
  description: "Read Warrn's Terms of Service for our AI-powered incident management platform. Understand your rights and responsibilities when using our multi-tenant SaaS solution for DevOps teams.",
  keywords: [
    "terms of service",
    "legal terms",
    "warrn terms",
    "SaaS terms",
    "incident management terms",
    "service agreement",
    "user agreement"
  ],
  canonicalUrl: `${SITE_CONFIG.url}/terms`,
  type: 'website'
});

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeroHeader />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 border-b pb-6">
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: October 13, 2024</p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
              <section id="agreement-to-terms">
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="mb-4">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and Warrn Inc.
                  ("Company," "we," "us," or "our") regarding your use of the Warrn incident management platform and
                  related services (collectively, the "Service").
                </p>
                <p>
                  By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to 
                  these Terms, you may not access or use the Service.
                </p>
              </section>

              <section id="description-of-service">
                <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                <p className="mb-4">
                  Warrn provides an AI-powered incident management platform designed to help organizations detect, 
                  respond to, and resolve system incidents. Our Service includes:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Intelligent incident triage and prioritization</li>
                  <li>Automated response workflows</li>
                  <li>Real-time monitoring and alerting</li>
                  <li>Integration with third-party tools and services</li>
                  <li>Analytics and reporting capabilities</li>
                  <li>Multi-tenant architecture for team collaboration</li>
                </ul>
              </section>

              <section id="user-accounts">
                <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>
                <h3 className="text-lg font-medium mb-2">3.1 Account Creation</h3>
                <p className="mb-4">
                  To use certain features of the Service, you must create an account. You agree to provide accurate, 
                  complete, and current information during registration and to update such information as necessary.
                </p>
                
                <h3 className="text-lg font-medium mb-2">3.2 Account Security</h3>
                <p className="mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials and for all 
                  activities that occur under your account. You agree to notify us immediately of any unauthorized 
                  access to your account.
                </p>

                <h3 className="text-lg font-medium mb-2">3.3 Multi-Tenant Environment</h3>
                <p>
                  Our Service operates in a multi-tenant environment. You acknowledge that while your data is 
                  logically separated from other customers' data, the underlying infrastructure may be shared.
                </p>
              </section>

              <section id="acceptable-use">
                <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use Policy</h2>
                <p className="mb-4">You agree not to use the Service to:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Transmit malicious code, viruses, or other harmful content</li>
                  <li>Attempt to gain unauthorized access to the Service or other users' accounts</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                  <li>Use the Service to monitor systems you do not own or have permission to monitor</li>
                  <li>Overload or interfere with the proper functioning of the Service</li>
                  <li>Remove or modify any proprietary notices or labels</li>
                </ul>
              </section>

              <section id="data-and-privacy">
                <h2 className="text-2xl font-semibold mb-4">5. Data and Privacy</h2>
                <h3 className="text-lg font-medium mb-2">5.1 Your Data</h3>
                <p className="mb-4">
                  You retain ownership of all data you upload to or create within the Service ("Customer Data"). 
                  You grant us a limited license to process Customer Data solely to provide the Service.
                </p>

                <h3 className="text-lg font-medium mb-2">5.2 AI Processing</h3>
                <p className="mb-4">
                  Our AI systems may analyze Customer Data to provide intelligent triage, pattern recognition, 
                  and automated responses. This processing is performed in accordance with our Privacy Policy 
                  and applicable data protection laws.
                </p>

                <h3 className="text-lg font-medium mb-2">5.3 Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect Customer Data, 
                  including encryption in transit and at rest, access controls, and regular security assessments.
                </p>
              </section>

              <section id="service-availability">
                <h2 className="text-2xl font-semibold mb-4">6. Service Availability and Support</h2>
                <h3 className="text-lg font-medium mb-2">6.1 Service Level</h3>
                <p className="mb-4">
                  We strive to maintain high availability of the Service but do not guarantee uninterrupted access. 
                  Specific service level commitments may be outlined in your subscription agreement.
                </p>

                <h3 className="text-lg font-medium mb-2">6.2 Maintenance</h3>
                <p>
                  We may perform scheduled maintenance that temporarily affects Service availability. We will 
                  provide reasonable advance notice of planned maintenance when possible.
                </p>
              </section>

              <section id="subscription-payment">
                <h2 className="text-2xl font-semibold mb-4">7. Subscription and Payment Terms</h2>
                <h3 className="text-lg font-medium mb-2">7.1 Subscription Plans</h3>
                <p className="mb-4">
                  The Service is offered under various subscription plans. Details of features, limitations, 
                  and pricing are available on our website and in your subscription agreement.
                </p>

                <h3 className="text-lg font-medium mb-2">7.2 Payment</h3>
                <p className="mb-4">
                  Subscription fees are billed in advance and are non-refundable except as specifically 
                  provided in these Terms or required by law.
                </p>

                <h3 className="text-lg font-medium mb-2">7.3 Auto-Renewal</h3>
                <p>
                  Subscriptions automatically renew at the end of each billing period unless cancelled 
                  in accordance with these Terms.
                </p>
              </section>

              <section id="intellectual-property">
                <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
                <h3 className="text-lg font-medium mb-2">8.1 Our IP</h3>
                <p className="mb-4">
                  The Service, including all software, AI models, algorithms, and documentation, is 
                  protected by intellectual property laws. We retain all rights not expressly granted to you.
                </p>

                <h3 className="text-lg font-medium mb-2">8.2 Feedback</h3>
                <p>
                  Any feedback, suggestions, or ideas you provide about the Service become our property 
                  and may be used without obligation or compensation to you.
                </p>
              </section>

              <section id="limitation-of-liability">
                <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
                <p className="mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                  INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING BUT NOT LIMITED TO LOST 
                  PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION.
                </p>
                <p className="mb-4">
                  IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, 
                  EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOSS OF 
                  DATA, OR BUSINESS INTERRUPTION, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF 
                  SUCH DAMAGES.
                </p>
                <p className="mb-4">
                  OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING TO THE SERVICE 
                  SHALL NOT EXCEED THE LESSER OF: (A) $500, OR (B) THE AMOUNT PAID BY YOU FOR THE 
                  SERVICE IN THE THREE MONTHS PRECEDING THE CLAIM.
                </p>
                <p>
                  NOTHING IN THIS SECTION SHALL LIMIT OR EXCLUDE LIABILITY TO THE EXTENT SUCH 
                  LIMITATION OR EXCLUSION IS PROHIBITED BY APPLICABLE LAW.
                </p>
              </section>

              <section id="indemnification">
                <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
                <p>
                  You agree to indemnify and hold us harmless from any claims, damages, or expenses 
                  arising from your use of the Service, violation of these Terms, or infringement 
                  of any third-party rights.
                </p>
              </section>

              <section id="termination">
                <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
                <h3 className="text-lg font-medium mb-2">11.1 Termination by You</h3>
                <p className="mb-4">
                  You may terminate your account at any time by following the cancellation process 
                  in your account settings or contacting our support team.
                </p>

                <h3 className="text-lg font-medium mb-2">11.2 Termination by Us</h3>
                <p className="mb-4">
                  We may suspend or terminate your access to the Service for violation of these Terms, 
                  non-payment of fees, or other reasons with appropriate notice.
                </p>

                <h3 className="text-lg font-medium mb-2">11.3 Effect of Termination</h3>
                <p>
                  Upon termination, your right to use the Service ceases immediately. We will provide 
                  a reasonable opportunity for you to export your data, subject to our data retention policies.
                </p>
              </section>

              <section id="cancellation-and-refund">
                <h2 className="text-2xl font-semibold mb-4">12. Cancellation and Refund Policy</h2>
                <h3 className="text-lg font-medium mb-2">12.1 Cancellation</h3>
                <p className="mb-4">
                  You may cancel your subscription at any time through your account settings or by contacting
                  our support team. Cancellation will take effect at the end of the current billing period.
                </p>
                
                <h3 className="text-lg font-medium mb-2">12.2 Refunds</h3>
                <p className="mb-4">
                  We offer a 30-day money-back guarantee for new subscriptions. If you are not satisfied
                  with our Service within the first 30 days, you may request a full refund by contacting
                  our support team.
                </p>
                <p className="mb-4">
                  After the 30-day period, refunds are provided at our discretion and may be considered
                  for service outages or other significant issues. Refunds, if approved, will be prorated
                  for the unused portion of your subscription.
                </p>
                
                <h3 className="text-lg font-medium mb-2">12.3 Refund Process</h3>
                <p>
                  To request a refund, please contact our support team at support@warrn.io with your
                  account information and reason for the refund request. Refund requests are typically
                  processed within 7 business days.
                </p>
              </section>

              <section id="compliance">
                <h2 className="text-2xl font-semibold mb-4">13. Compliance and Certifications</h2>
                <p className="mb-4">
                  We are committed to maintaining high security standards and implementing industry best 
                  practices for data protection and system security. Information about our current security 
                  practices and any obtained certifications will be made available upon request.
                </p>
              </section>

              <section id="changes-to-terms">
                <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
                <p className="mb-4">
                  We may modify these Terms from time to time. We will notify you of material changes 
                  through the Service or other reasonable means. Your continued use of the Service 
                  after such notification constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section id="governing-law">
                <h2 className="text-2xl font-semibold mb-4">15. Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India,
                  without regard to its conflict of law principles. Any disputes arising from these Terms
                  shall be subject to the exclusive jurisdiction of the courts located in Bangalore, Karnataka.
                </p>
              </section>

              <section id="contact-information">
                <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
                <p>
                  For questions about these Terms, please contact us at:{" "}
                  <a href="mailto:support@warrn.io" className="text-primary hover:underline">
                    support@warrn.io
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