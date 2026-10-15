// app/privacy-policy/page.js
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { siteConfig } from '../../content/siteContent';

export const metadata = {
  title: 'Privacy policy'
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        eyebrow="Privacy policy"
        title="How we collect, use and protect personal data"
        intro="This sample privacy policy is written for a UK church website and should be reviewed against the church’s actual practices before publication."
      />

      <Section
        title="Important notice"
        intro="Please review this wording carefully before the site goes live."
      >
        <div className="border-l-8 border-gold-500 bg-gold-50 p-6">
          <p >
            This sample privacy policy is provided for general website
            development purposes only and does not constitute legal advice. The
            church should review and approve the final wording in light of its
            actual practices and, where necessary, obtain legal or specialist
            data protection advice.
          </p>
        </div>
      </Section>

      <Section
        title="Who we are"
        intro="Victory House Chapel Assemblies of God, Edinburgh acts as the data controller for personal data collected through this website."
      >
        <div className="prose-content">
          <p>
            {siteConfig.name} is the data controller for the personal data
            collected through this website for the purposes described below.
          </p>
          <ul>
            <li>Organisation: {siteConfig.name}</li>
            <li>Registered Scottish Charity Number: {siteConfig.charityNumber}</li>
            <li>
              Postal address: {siteConfig.addressLine1}, {siteConfig.addressLine2}
            </li>
            <li>Data protection email: {siteConfig.privacyEmail}</li>
          </ul>
          <p>
            We aim to handle personal data in line with the UK General Data
            Protection Regulation (UK GDPR), the Data Protection Act 2018 and,
            where relevant, the Privacy and Electronic Communications
            Regulations (PECR).
          </p>
        </div>
      </Section>

      <Section
        title="What personal data we may collect"
        intro="The exact data collected will depend on how the website is used and which services are enabled."
      >
        <div className="prose-content">
          <ul>
            <li>
              Contact details submitted through website forms, such as name,
              email address, subject and message content.
            </li>
            <li>
              Records connected with giving or donations, where applicable,
              including payment-related reference information supplied through a
              third-party giving provider.
            </li>
            <li>
              Technical information such as IP address, browser type and general
              usage information collected through necessary website logs and, if
              enabled, analytics tools.
            </li>
            <li>
              Any information you choose to share with us in messages, prayer
              requests or other enquiries.
            </li>
          </ul>
        </div>
      </Section>

      <Section
        title="How we use personal data"
        intro="We use personal data only where there is a clear purpose and lawful basis for doing so."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="prose-content">
            <h2>Common purposes</h2>
            <ul>
              <li>Responding to enquiries and communicating with visitors or members</li>
              <li>Administering church activities and pastoral contact</li>
              <li>Processing donations and maintaining financial records</li>
              <li>Maintaining website security and performance</li>
              <li>
                Understanding general website usage through analytics, where you
                have consented to non-essential cookies
              </li>
              <li>Complying with legal, regulatory and charity governance duties</li>
            </ul>
          </div>

          <div className="self-start rounded bg-navy-50 p-6">
            <p className="text-xl font-bold">
              Lawful bases
            </p>
            <div className="mt-3 space-y-4">
              <p>
                Depending on the circumstances, we may rely on consent,
                legitimate interests, legal obligation or contract as lawful
                bases for processing under UK GDPR.
              </p>
              <p>
                The lawful basis used will depend on the nature of the
                interaction, the information involved and the purpose of the
                processing.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Sharing, retention and security"
        intro="We seek to handle personal information carefully and responsibly."
      >
        <div className="prose-content">
          <p>
            We do not sell personal data. We may share information, where
            appropriate, with trusted service providers who help us operate the
            website or church administration, such as website hosts, email
            providers and payment processors.
          </p>
          <p>
            We keep personal data only for as long as reasonably necessary for
            the purpose for which it was collected, including to meet legal,
            accounting, safeguarding or reporting requirements.
          </p>
          <p>
            We take appropriate technical and organisational measures to help
            protect personal data from unauthorised access, loss, misuse or
            disclosure. However, no method of internet transmission or
            electronic storage can be guaranteed to be completely secure.
          </p>
        </div>
      </Section>

      <Section
        title="Your rights"
        intro="Under UK GDPR, individuals may have a number of rights in relation to their personal data."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            'The right of access',
            'The right to rectification',
            'The right to erasure',
            'The right to restriction of processing',
            'The right to data portability',
            'The right to object'
          ].map((item) => (
            <div
              key={item}
              className="card border-t-4 border-t-navy-900 p-5"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Complaints and contact"
        intro="If you have concerns about how your information is handled, please contact the church first."
      >
        <div className="prose-content">
          <p>
            If you are unhappy with how your data has been handled, please
            contact us first so we have an opportunity to address your concern.
            You also have the right to complain to the Information
            Commissioner&apos;s Office (ICO), the UK supervisory authority for
            data protection matters.
          </p>
          <ul>
            <li>Email: {siteConfig.privacyEmail}</li>
            <li>
              Postal address: {siteConfig.addressLine1}, {siteConfig.addressLine2}
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}